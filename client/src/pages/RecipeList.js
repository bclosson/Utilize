import React from 'react';
import { Link } from 'react-router-dom';
import RecipeModel from '../models/recipe';
import RecipeCard from '../Components/RecipeCard';

class RecipeList extends React.Component {
  state = {
    recipes: {},
  };

//  // Call API 
//  componentDidMount(){
//   let app_id = '2b29af96';
//   let app_key = 'ad6c9bcb4fd957fb868715bd11fe277a';

//   fetch(`https://api.edamam.com/search?app_id=${ app_id }&app_key=${ app_key }&q=Chicken`)
//     .then((buffer) => {
//       if (buffer.ok) {
//         return buffer.json(buffer)
//       } else {
//         console.log('API error')
//         this.setState({error: true})
//       }
//     })
//     .then((data) => {
//       // console.log(data);
//       this.setState({
//         recipes: data,
//         loading: false,
//       })
//     })
//     .catch((error) => {
//       console.log(error)
//       this.setState({error: error})
//     });
//     // console.log('this test:', this.state.hits[0]);
// }

// render() {

//   if (this.state.loading) {
//     return <h1>Loading...</h1>
//   } else if (this.state.error) {
//     return <h1>Error Getting Data</h1>
//   } else {

//     return (
//       <div className="row">
//         <div className="col s6 m7">
//           <div className="card">
//             <div className="card-image">
//               <img src={ this.state.image } alt="" />
//               <span className="card-title">Card Title</span>
//             </div>
//             <div className="card-content">
//              <h1>This will be our recipe</h1>
//             </div>
//             <div className="card-action">
//               <Link to="/">This is a link</Link>
//             </div>
//           </div>
//         </div>
//       </div>  
//     )
//   }
// }
};

export default RecipeList;
