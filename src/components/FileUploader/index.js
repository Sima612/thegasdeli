import Header from "../Header";
import Nav from "../Nav";
import "./fileuploader.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Preview } from "../Preview";
import "react-toastify/dist/ReactToastify.css";

export const FileUploader = ({ onSuccess, imageFiles }) => {
  const [files, setFiles] = useState(null);

  const onInputChange = (e) => {
    setFiles(e.target.files);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i]);
    }

    axios
      .post("//localhost:8000/upload", data)
      .then((response) => {
        toast.success("Upload Success");
        onSuccess(response.data);
      })
      .catch((e) => {
        toast.error("Upload Error");
      });
  };

  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <main className="media-main container mx-auto">
        <h2 className="text-2xl text-center mt-10 mb-10 font-bold text-slate-700 border-b-8 border-amber-400 w-1/6 mx-auto">
          Upload Your Files{" "}
        </h2>
        <section className="contact-section w-1/2 max-x-xs mx-auto">
          <form method="post" action="#" id="#" onSubmit={onSubmit}>
            <div class="form-group files w-full">
              <input
                onChange={onInputChange}
                type="file"
                class="form-control"
                multiple
              />
            </div>
            <div className="flex justify-center">
              <button className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-white text-lg font-bold bg-blue-700 leading-tight focus:outline-none focus:shadow-outline">
                Upload
              </button>
            </div>
          </form>
        </section>
        <Preview imageFiles={imageFiles} />
        <ToastContainer />
      </main>
    </>
  );
};
