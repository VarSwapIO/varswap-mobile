// import {SharedEventName} from '@uniswap/analytics-events';
import React, {PropsWithChildren} from 'react';
import {NativeSyntheticEvent, NativeTouchEvent} from 'react-native';
import {ITraceContext, Trace, TraceContext} from 'components/telemetry/Trace';
// import {sendAnalyticsEvent} from 'features/telemetry';
import {
  ElementName,
  MobileEventName,
  ReactNativeEvent,
} from 'features/telemetry/constants';

export type TraceEventProps = {
  // Element name used to identify events sources
  // e.g. account-card, onboarding-create-wallet
  // TODO: [MOB-3877] Enforce ElementName type only
  // TODO: [MOB-4085] Explore removing this prop now that it is in TraceContext
  elementName?: ElementName;
  // event name to log
  // TODO: [MOB-3878] Enforce EventName type only
  eventName: MobileEventName;
  // Known components' events that trigger callbacks to be augmented with telemetry logging
  events: ReactNativeEvent[];
  // extra properties to log with the event
  properties?: Record<string, unknown>;
} & ITraceContext;

/**
 * Telemetry instrumentation component that wraps event callbacks with logging logic.
 *
 * @example
 *  <TraceEvent actionProps={{ onPress: { action: 'press' }}} elementType='button'>
 *    <Button onPress={() => console.log('pressed')}>Push me</Button>
 *  </TraceEvent>
 */
function _TraceEvent(props: PropsWithChildren<TraceEventProps>): JSX.Element {
  const {
    elementName,
    eventName,
    events,
    properties,
    children,
    ...logEventProps
  } = props;

  return (
    <Trace {...logEventProps}>
      <TraceContext.Consumer>
        {(consumedProps: any): Record<string, unknown>[] | null | undefined =>
          React.Children.map(children, child => {
            if (!React.isValidElement(child)) {
              return child;
            }

            // For each child, augment event handlers defined in `actionProps`  with event tracing
            return React.cloneElement(
              child,
              getEventHandlers(
                child,
                consumedProps,
                events,
                eventName,
                elementName,
                properties,
              ),
            );
          })
        }
      </TraceContext.Consumer>
    </Trace>
  );
}

export const TraceEvent = React.memo(_TraceEvent);

const onPressEventArray = [ReactNativeEvent.OnPress];

function _TracePressEvent(
  props: PropsWithChildren<Pick<TraceEventProps, 'properties' | 'element'>>,
): JSX.Element {
  return (
    <TraceEvent
      element={props.element}
      // eventName={SharedEventName.ELEMENT_CLICKED}
      events={onPressEventArray}
      properties={props.properties}>
      {props.children}
    </TraceEvent>
  );
}

export const TracePressEvent = React.memo(_TracePressEvent);

/**
 * Given a set of child element and action props, returns a spreadabble
 * object of the event handlers augmented with telemetry logging.
 */
function getEventHandlers(
  child: React.ReactElement,
  consumedProps: ITraceContext,
  events: ReactNativeEvent[],
  eventName: MobileEventName,
  elementName?: ElementName,
  properties?: Record<string, unknown>,
): Partial<
  Record<ReactNativeEvent, (e: NativeSyntheticEvent<NativeTouchEvent>) => void>
> {
  const eventHandlers: Partial<
    Record<
      ReactNativeEvent,
      (e: NativeSyntheticEvent<NativeTouchEvent>) => void
    >
  > = {};

  for (const event of Object.values(events)) {
    eventHandlers[event] = (eventHandlerArgs: unknown): void => {
      // call child event handler with original arguments
      child.props[event].apply(child, [eventHandlerArgs]);
    };
  }
  // return a spreadable event handler object
  return eventHandlers;
}
