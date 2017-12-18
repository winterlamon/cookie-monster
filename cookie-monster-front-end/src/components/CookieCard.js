import React from 'react';


class CookieCard extends React.Component {

  handleEditClick = () => {
    console.log('Edit Button clicked')
  }

  handleDeleteClick = () => {
    console.log('Delete Button clicked')
    this.props.deleteCookie(this.props.cookie)
  }

  render() {
    return (
      <div className="cards container">
        <center>
       <div className="image">
            <img src={this.props.cookie.image_url} alt={`${this.props.cookie.name}`} />
       </div>
     </center>
       <div className="content">
         <div className="header"><h4><strong>{this.props.cookie.name}</strong></h4></div>
       <div className="description">
            <strong>Ingredients:</strong> {this.props.cookie.ingredients}<br/>
            <strong>Prep Time:</strong> {this.props.cookie.prep_time} minutes<br/>
            <strong>Bake Time:</strong> {this.props.cookie.bake_time} minutes
         </div>
       </div>
       <div className="extra content">
         <span>
          <button className="button edit-button" id={`edit ${this.props.cookie.id}`} onClick={this.handleEditClick}>EDIT</button>
        <button className="button delete-button" id={`delete ${this.props.cookie.id}`} onClick={this.handleDeleteClick}>DELETE</button>
        </span>
      </div>
    </div>
    )
  }
}

export default CookieCard
