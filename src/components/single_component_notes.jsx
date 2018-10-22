import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <div>
          {this.state.tags.length === 0 && "Please add some tags!"}
          {this.renderTags()}
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;

/* 
    - Shortcuts: imrc, cc


    - jsx codes eventually get to call React.createElement to compile, why we imported React
    - React.createElement('div') takes a single argument of what type of object to render.
      So two tags in parallel gives error, instead, we need to wrap them in a single <div> object.
    - Replaced <div> with <React.Fragment> so we don't have redundant/useless <div> objects.
    

    - In between {}, we can put any valid javaScript expressions
    - jsx expressions are just like normal javaScript objects, you can return/pass them to a function
    

    - imageUrl: "https://picsum.photos/200"  Use this url to generate random pics.
    - <img src={this.state.imageUrl} alt="" />


    - <span className="badge badge-primary m-2">  from Bootstrap classes. We don't use class here because that is reserved by js.
    - Adding class is the best way. But if you want to customize, you can:
        1.Create a styles object with properties
        styles = {
            fontSize: 10,
            fontWeight: "bold"
        };

        2.Add it in the tag as attributes
        <span style={this.styles} className="badge badge-primary m-2">

    - Or just add the style object inline: 
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">



    - getBadgeClasses(): used to render contents dynamically


    - Rendering a list: give each item a key that is unique within the list so react knows their key and can monitor their states
     <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    - Conditional rendering: renderTags()
    - In javascript, when ( true && non-bool trusy object ) -> returns the last object
    

    - For handleIncrement(), this is set to undefined because its calling by a standalone functino. There are two fixes:
    1. Rebind this in a constructor function
    constructor() {
      super();
      this.handleIncrement = this.handleIncrement.bind(this); //this returns a functino with binded this
    }
    2. Rewrite handleIncrement() as an arrow function since arrow functions do not rebind this

    - Notice here we're not calling the function, just passing the function REFERENCE 
    <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">

    - When updating the state inside handleIncrement().
        this.state.count++; is only updating the local value of state, it won't reflect on the client as react is not aware of the change of state thus won't bring the actual DOM in sync with the virtual DOM.
        use setState() from Component class and pass in the properties that need to be changed.
    - setState() will schedule an async call to render() in the future, which will return a new react element which only has changed parts changed
    

    - Whenever need to pass an argument to an event handler, use an empty arrow function to call the handleFunction(with argument);
      onClick={() => this.handleIncrement(argument)}
    
    
    */
