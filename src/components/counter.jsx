import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className={"btn btn-danger btn-sm"}
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

/*
  - Every react component has a property called props, a plain js object includes all the attributes we set in the component
  - Key will not be part of props tho:
      We declared Counter Component in counters.jsx
      <Counter key={counter.id} value={counter.value} selected />

      And in counter.jsx, we can get the values(properties) by this.props
      props {value: 4, selected: true}

      selected isn't set to anyvalue, so default it is true

  - Rather than passing multiple props with counter.value, counter.id, counter.seleted...
    We can simply pass the counter object so code is cleaner and simpler
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />

  - Passing children:
      {this.props.children} renders the content inside the <Counter> tags: it renders <h4>
      <Counter key={counter.id} value={counter.value}>
        <h4>Counter #{counter.id}</h4>
      </Counter>

  
  - Props vs States
    - Props: is the input to a component. You cannot modify it inside the component as it is read-only
    - States: is the data that is completely internal, local and private to a component. Other components cannot access that state
  
  
  - Handling event - delete counter
    - THE COMPONENT THAT OWNS A PIECE OF THE STATE, SHOULD BE THE ONE MODIFYING IT.
      So, to delete a counter, we need to delete the object in the state of counters. So Counters.jsx should be the one to implement handleDelete() and pass the referecne of the function through props.
      Whereas counter.jsx is unable to do such operation, it can raise an event onDelete() and Counters.jsx handles events.

  
  - SINGLE SOURCE OF TRUTH
    - The values in the states is initialized only once. So later on when props changed, it won't update the states in local counter component.
    - A CONTROLLED component does not have its own state = {}. It solely relies on this.props for the data.
      And raises evens whenever data needs to be changed. Counter is now entirely controlled by Counters.

  - Passing data in a parent/child relationship -> using controlled component pass through props
  - Passing data in a same-level sibling relationship -> lift the states up to parents so the data can be shared by all children
      ex. Lift the states[] to <App>, so it can be shared by <Counters> and <NavBar>
      - This way we can bring multiple components in sync.
      */
