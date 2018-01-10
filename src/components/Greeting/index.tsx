import * as React from 'react';

export interface GreetingProps {
  greeting: string;
  updateGreeting: (greeting: string) => void;
}

export default class Greeting extends React.Component<GreetingProps, {}> {
  public refs: {
    greetingInputRef: HTMLInputElement;
  };

  constructor(props: GreetingProps) {
    super(props);
    this.updateGreetingAction = this.updateGreetingAction.bind(this);
  }

  public updateGreetingAction() {
    this.props.updateGreeting(this.refs.greetingInputRef.value);
  }

  public render() {
    return (
      <div id='greeting'>
        <h1 id='greeting-text'>{this.props.greeting}</h1>
        <input id='greeting-input' ref={`greetingInputRef`} type='text' />
        <button id='greeting-button' onClick={this.updateGreetingAction}>Update Greeting</button>
      </div>
    );
  }
}
