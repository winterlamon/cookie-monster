import React from 'react';


class CookieForm extends React.Component {
  state = {
      name: "",
      image_url: "",
      ingredients: "",
      prep_time: 0,
      bake_time: 0
    }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    console.log(this.state)
    event.preventDefault();
    this.props.createCookie(this.state)
  }

  render() {
    return (
      <div className="container">
        <h2><strong>Create a Cookie</strong></h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name:
          <input type="text" value={this.state.name} name="name" placeholder="Yummy Cookie" onChange={this.handleChange} /></label><br/>
        <label>Image URL:
          <input type="text" value={this.state.image_url} name="image_url" placeholder="http://www.yummycookie.com/image.png" onChange={this.handleChange} /></label><br/>
        <label>Ingredients:
          <input type="text" value={this.state.ingredients} name="ingredients" placeholder="flour, butter, etc." onChange={this.handleChange} /></label><br/>
        <label>Prep Time (in minutes):
          <input type="number" value={this.state.prep_time} name="prep_time" placeholder="10" onChange={this.handleChange} /></label><br/>
        <label>Bake Time (in minutes):
          <input type="number" value={this.state.bake_time} name="bake_time" placeholder="15" onChange={this.handleChange} /></label><br/>
        <input type="submit" className="button" />
        </form>
      </div>
    )
  }
}

export default CookieForm
