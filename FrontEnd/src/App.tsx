import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import Home from "./Components/Home";
import Proverbs from "./Components/Proverbs";
import Setting from "./Components/Setting";
import Preview from "./Components/Bibical";
import Story from "./Components/Pages/Story";
import Proverb from "./Components/Pages/Proverbs";
import Bibilical from "./Components/Pages/Biblical";
import FormStory from "./Components/Froms/FormStory";
import FormProverb from "./Components/Froms/FormProverb";
import ViewStory from "./Components/Pages/ViewStory"
import ViewProverb from "./Components/Pages/ViewProverb"
import EditS from "./Components/Froms/EditStory"
import EditProverb from "./Components/Froms/EditProverb"
import DeleteProverb from "./Components/Pages/DeletePro"
import DeleteStory from "./Components/Pages/DeleteStory"
import About from "./Components/Pages/AboutUs"
import Terms from "./Components/Pages/Terms"
import Service from "./Components/Pages/service"
// import ProverbView from "./Components/Pages/ProvView"
import StoryView from "./Components/Pages/Storyview"

import Subscribe from "./Components/Pages/Subscribe"
import Idea from "./Components/Pages/Idea"

import TopProverb from "./Components/Top/TopProverb"
import TopStory from "./Components/Top/TopStory"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Proverbs" element={<Proverbs />} />
          <Route path="Setting" element={
            <>
              <SignedIn>
                <Setting />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }>
            <Route path="Story" element={<Story />} />
            <Route path="Proverb" element={<Proverb />} />
            <Route path="Bibilical" element={<Bibilical />} />
          </Route>
          <Route path="Preview" element={
            <>
              <Preview />
            </>
          } />
          <Route path="FormStory" element={<FormStory />} />
          <Route path="FormProverb" element={<FormProverb />} />
          <Route path="story/:id" element={<ViewStory />} />
          <Route path="proverb/:id" element={<ViewProverb />} />
          <Route path="editS/:id" element={<EditS />} />
          <Route path="editP/:id" element={<EditProverb />} />
          <Route path="deleteProveb/:id" element={<DeleteProverb />} />
          <Route path="deleteStory/:id" element={<DeleteStory />} />


          <Route path="StoryView/:id" element={<StoryView />} />
          {/* <Route path="ProverbView" element={<ProverbView />} /> */}

          <Route path="TopStory/:id" element={<TopStory />} />
          <Route path="TopProverb/:id" element={<TopProverb />} />

          <Route path="subscribe" element={
            <>
              <SignedIn>
                <Subscribe />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          <Route path="Idea" element={
            <>
              <SignedIn>
                <Idea />
              </SignedIn>
              <SignedOut mode='modal'>
                <RedirectToSignIn  />
              </SignedOut>
            </>

          } />

          <Route path="About" element={<About />} />
          <Route path="Terms" element={<Terms />} />
          <Route path="Service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}