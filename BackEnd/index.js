//--Dependencies--
const express = require("express");
const App = express();
const Mongoose = require("mongoose");
const Cors = require("cors");


require("dotenv").config();
const Port =process.env.PORT;


const corsOptions = {
  origin: "http://localhost:8000" 
}


App.use(express.json());
App.use(Cors());


// --Connection of Dbs--
Mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Db is connected");
  })
  .catch((err) => {
    console.log(err);
  });



  //-------SERVER FOR STORY-------
const DBSchema = new Mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Author: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    Decription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);



const Stories = Mongoose.model("Story", DBSchema, "Story");


App.post("/story", (req, resp) => {
  const newStory = {
    
    Title:req.body.TofStory,
    Author:req.body.Author,
    image:req.body.Image,
    Decription:req.body.Decription

    };

    
  const Story = Stories.create(newStory)
    .then((data) => {
      resp.json(data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
});


App.get("/story/:id", (req, resp) => {
  const { id } = req.params;
  const selectStory = Stories.findById(id)
    .then((data) => {
      resp.json(data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

App.get("/Stories", (req, resp) => {
  const selectStory = Stories.find()
    .then((data) => {
      resp.json(data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
});



// -----SERVER FOR PROVERBS-----
const ProverbSchema = new Mongoose.Schema(
  {
     TitleofProverb:{
        type:String,
        required:true
     },
     Proverb:{
        type:String,
        required:true
     },
  },
  {
    timestamps: true,
  }
);
const proverbs = Mongoose.model("Proverbs", ProverbSchema, "Proverbs");

App.post("/proverb", (req, resp) => {

  const newProverb = {
    TitleofProverb:req.body.Tofproverb,
    Proverb:req.body.Proverb
    };

    
  const Proverb = proverbs.create(newProverb)
    .then((data) => {
      resp.json(data);
      console.log(data.data)
    })
    .catch((err) => {
      console.log("Error", err);
    });
});


App.get("/proverb/:id", (req, resp) => {
  const { id } = req.params;
  const selectproverb = proverbs.findById(id)
    .then((data) => {
      resp.json(data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

App.get("/proverbs", (req, resp) => {
  const selectProverb = proverbs.find()
    .then((data) => {
      resp.json(data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
});





// Listener of Port
App.listen(Port, () => {
  console.log(`This app is running on ${Port}`);
});
