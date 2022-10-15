import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App p-10">
      {/* Delete from here  */}
      <h2 className="text-3xl">Start Here</h2>
      <h2 className="text-3xl">
        0. The components you make should be in the components folder/
      </h2>
      <p className="text-3xl">
        1. Use as little css as possible, use tailwind instead
      </p>
      <p className="text-3xl">
        2. Make the mobile view first, we will then proceed to the desktop view
      </p>
      <p className="text-3xl">
        3. Use Cloudinary for hosting the images and then use the links in the
        website, rather than using local images,
      </p>
      <p className="mt-4 text-3xl">
        If you get stuck use this link{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopenner noreferrer"
          className="bg-blue-700 text-white px-3 py-1 rounded-md"
        >
          Tailwind Docs
        </a>
      </p>
      <p className="text-3xl mt-4">
        Download the official Tailwind VSCode intellisense extension as well.
        <br />
        Ctrl + Space will switch on autocomplete while you are giving any
        className, it is super useful.
      </p>

      <div>
        <p className="text-3xl mt-6">
          Aditionally I have added the colors we need in the tailwind config
          files I have named them as red, green, and purple for convinience.
          Hence you would add the class name like 'text-purple' or 'bg-green' to
          access the properties
        </p>
        <p className="text-3xl mt-3">
          If you are still underconfidennt about this tailbird thing, watch this
          1 hour tut, u will basically get the hang of it <br />
          <br />
          <a
            href="https://www.youtube.com/watch?v=VsY9W8HTaoY"
            className="bg-custom-red text-white p-2 rounded-lg -mt-3 inline-block"
          >
            {" "}
            Learn Tailwind
          </a>
          <br />
          That's all, Have fun coding! ~sid
        </p>
      </div>
      {/* Delete until here */}
    </div>
  );
}

export default App;
