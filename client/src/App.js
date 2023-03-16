import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import AddBlogForm from "./components/create/AddBlogForm";
import BlogDetails from "./components/blogDetails/BlogDetails";
import EditBlog from "./components/editBlog/EditBlog";




function App() {
  return (
    <>
    <Topbar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/write" element={ <AddBlogForm/>} />
      <Route path="/blogDetails/:id" element={<BlogDetails/>} />
      <Route path="/editBlog/:id" element={ <EditBlog/>} />
    </Routes>
    </>
  );
}

export default App;
