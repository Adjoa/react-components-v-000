class Comment extends React.Component {
  render() {
    return (
      <div>
        i am a hard coded comment! help! make me dynamic!
      </div>
    )
  }
}


class BlogPost extends React.Component {
  render() {
    return (
      <div id="blog-post">
 
        <div id="blog-content">
          Dear Reader: Bjarne Stroustrup has the perfect lecture oration.
        </div>
 
        // Here is where the real magic comes in: we are rendering multiple components
        // within a single parent component. Pay close attention to that funky
        // content={'blah'} portion. We are defining a variable that is passed to
        // every `Comment` component. Thereafter, we can access that `content` variable within
        // the `Comment` component via the `this.props.content` you see above.
        <Comment content={"I agree with this statement. - Angela Merkel"}/>
        <Comment content={"A universal truth. - Noam Chomsky"}/>
        <Comment content={"Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451"}/>
 
      </div>
    )
  }
}