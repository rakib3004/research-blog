const articles = [
  {
    name: "learn-python",
    title: "The Fastest Way to Learn Python",
    thumbnail: "/images/learn-python.jpg",
    content: [
      `Hello folks, Python is one of the best programming languages in the tech world and a great tool if you want to become a Software Developer, Data Scientist, Web Developer, or Machine Learning Engineer.
    Because of its ever-increasing popularity, more and more people are learning Python but at the same time, they are also struggling to find the best resources to learn Python in a guided and structured manner.
    Being an author of a technical blog, I often receive queries like how do I learn Python, what is the best way to learn Python? Could you please suggest the best resource to learn Python, or should I join an online course from Udemy or Coursera to learn Python or not, etc?`,
    ],
  },
  {
    name: "learn-github",
    title: "Introduction to Git and Github",
    thumbnail: "/images/learn-github.jpg",
    content: [
      `git add is a command used to add a file that is in the working directory to the staging area.
      git commit is a command used to add all files that are staged to the local repository.
      git push is a command used to add all committed files in the local repository to the remote repository. So in the remote repository, all files and changes will be visible to anyone with access to the remote repository.
      git fetch is a command used to get files from the remote repository to the local repository but not into the working directory.
      git merge is a command used to get the files from the local repository into the working directory.
      git pull is a command used to get files from the remote repository directly into the working directory. It is equivalent to a git fetch and a git merge .`
    ]
  },
  {
    name: "learn-react",
    title: "React Crash Course",
    thumbnail: "/images/learn-react.jpg",
    content: [
      `There is a ton of options when it comes to client-side frameworks, and often it can be a little confusing for beginners to choose from a wide range of choices.
       Often these choices boil down to Angular, React, and Vue. “So, which is the best choice?”, you may ask. I can’t help but give you the clichéd answer that there
       isn’t really the best choice. Just pick one and learn it thoroughly, would be the best advice to give, because all the three choices eventually boil down to very
        similar working strategies.

      `,
    ],
  },
  {
    name: "learn-http",
    title: "HTTP In Depth",
    thumbnail: "/images/learn-http.jpg",
    content: [
      `The Hypertext Transfer Protocol (HTTP) is an application protocol for distributed, collaborative, and hypermedia information systems.
      HTTP is the foundation of data communication for the World Wide Web.
      Protocola protocol is the special set of rules that end points in a 
      telecommunication connection use when they communicate. Protocols specify interactions between the communicating entities.
      Protocols usually consist of three main parts:-      
      1- Header: contains information such as source, destination, fileType and size.
      2- Payload: the actual information transmitted using the protocol .
      3- Footer: a control field to ensure the Payload data is transmitted free of errors.`
    ]
  },
];

export default articles;
