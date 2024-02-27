// Card.js

import React from 'react';

 const Card = ()=>{
  return (
    <div class="row">
  <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card 1</h5>
        <p class="card-text">Text for Card 1</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card 2</h5>
        <p class="card-text">Text for Card 2</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card">
        <div class="card-body">
            <h5 class ="card-title">Card 3</h5>
            <p class="card-text">Text for Card 3</p>
        </div>
    </div>
  </div>
</div>
  );
}

export default Card;
