function display() {
  let get = document.getElementById("menuid");
  if (get.style.display === "flex") {
    get.style.display = "none";
  } else {
    get.style.display = "flex";
  }

  // document.getElementById('menuid').style.display="flex";
  document.getElementById("head").style.flexDirection = "column";
  get.style.flexDirection = "column";
  get.style.marginLeft = "30px";
  // document.getElementById('ham').style.;
}

let prop = [
  {
    Image: "./images/pg3v1.jpg",
    Type: "Luxury Villa",
    price: "$2.264.000",
    Address: "18 Old Street Miami,OR 97219",
    Bedrooms: 8,
    Bathrooms: 8,
    Area: "545m2",
    Floor: 3,
    Parking: 6,
  },
  {
    Image: "./images/pg3v2.jpg",
    Type: "Luxury Villa",
    price: "$1.180.000",
    Address: "54 New Street Florida,OR 27001",
    Bedrooms: 6,
    Bathrooms: 5,
    Area: "450m2",
    Floor: 3,
    Parking: 8,
  },
  {
    Image: "./images/pg3v3.jpg",
    Type: "Luxury Villa",
    price: "$1.460.000",
    Address: "26 Mid Street Portland,OR 38540",
    Bedrooms: 5,
    Bathrooms: 4,
    Area: "225m2",
    Floor: 3,
    Parking: 10,
  },
  {
    Image: "./images/pg3v4.jpg",
    Type: "Apartment",
    price: "$584.500",
    Address: "12 Hope Street Portland,OR 12650",
    Bedrooms: 4,
    Bathrooms: 3,
    Area: "125m2",
    Floor: "25th",
    Parking: "2 cars",
  },
  {
    Image: "./images/pg3v5.jpg",
    Type: "Penthouse",
    price: "$925.600",
    Address: "34 Hope Street Portland,OR 42680",
    Bedrooms: 4,
    Bathrooms: 4,
    Area: "180m2",
    Floor: "38th",
    Parking: "2 cars",
  },
  {
    Image: "./images/pg3v6.jpg",
    Type: "Modern condo",
    price: "$450.000",
    Address: "22 Hope Street Portland,OR 16540",
    Bedrooms: 3,
    Bathrooms: 2,
    Area: "545m2",
    Floor: "26th",
    Parking: "3 cars",
  },
];

let villalist = document.getElementById("allvilla");
prop.map((prop) => {
  console.log("property image is :" + prop.Image);
  console.log("property name is :" + prop.Type);
  console.log("property price is :" + prop.price);
  console.log("property address is :" + prop.Address);
  console.log("property Bedroom is :" + prop.Bedrooms);
  console.log("property bathroom is :" + prop.Bathrooms);
  console.log("property price is :" + prop.Area);

  const prop_html = `
    <div class="proplist">
    <img id="propimg" src=${prop.Image} width="300px" height="300px" > 
    <div class="typeprice">
    <p id="proptype">${prop.Type}</p>
    <p id="propprice"><b>${prop.price}</b></p>
    </div>
    <div class="exceptimg">
    <h3><b>${prop.Address}</b></h3>
    <div class="bedbath">
    <p>Bedrooms: ${prop.Bedrooms}</p>
    <p>Bathrooms: ${prop.Bathrooms}</p>
    </div>
    <div class="area">
    <p>Area: ${prop.Area}</p>
    <p>Floor: ${prop.Floor}</p>
    <p>Parking: ${prop.Parking}</p>
    </div>
    </div>
    <hr>
    <p id="visit">Schedule a visit</p>
    </div>

    
    `;
  villalist.innerHTML += prop_html;
});
