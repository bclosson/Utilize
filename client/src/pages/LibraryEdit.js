import React from 'react';
import  RecipeModel from '../models/recipe';


class LibraryEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    recipe: {},
    recId: '',
    }
  }

  componentDidMount() {
    const recId = this.props.match.params.id;
    RecipeModel.getOne(recId)
      .then((data) => {

        this.setState({ recipe: data.recipe, recId: this.props.match.params.id })
      })
  }

  updateRecipe = () => {
    const recId = this.props.match.params.id;
    RecipeModel.update(recId)
      .then((res) => {
      })
      .then((res) => this.props.history.push('/recipes/library'));
  };

  render() {
    let recipe = this.state.recipe;
    console.log(this.state);

  return(
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
            <label for="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate" />
            <label for="last_name">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input disabled value="I am not editable" id="disabled" type="text" className="validate" />
            <label for="disabled">Disabled</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate" />
            <label for="password">Password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" />
            <label for="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            This is an inline input field:
            <div className="input-field inline">
              <input id="email_inline" type="email" className="validate" />
              <label for="email_inline">Email</label>
              <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
            </div>
          </div>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                <label for="textarea1">Textarea</label>
              </div>
            </div>
          </form>
        </div>
      </form>
    </div>
  )
}


export default LibraryEdit;
