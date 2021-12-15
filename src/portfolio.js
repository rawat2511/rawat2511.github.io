
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rawat2511.github.io/',
  title: 'SR.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shubham Rawat',
  role: 'Front End Web Developer',
  description:
    'Aspiring Front End Wed Developer with good knowledge of React Js. Want to start my career as a software developer in a high growth startup and make good-looking User Interfaces. I want to keep myself updated with the latest technological advances. Apart from this, I like to know about startup ecosystem and about Personal Finance. I even like to play play basketball whenever I get a chance and I have been the part of my schools basketball team.',
  resume: './Shubham.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/shubham2511',
    github: 'https://www.github.com/rawat2511',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Book My Show Clone',
    description:
      'I along with my 2 other teammates made this website within 8 days. Here, one can select the seats to book the tickets. One can see the trailers of the latest movies which are fetched from the YouTube using the YouTube API. We can also sort and filter different movies.',
    stack: ['HTML', 'CSS', 'JavaScript', 'ES6'],
    sourceCode: 'https://github.com/anishtiwari09/bookMyShow_Tribe_Project',
    livePreview: 'https://rawat2511.github.io/BookMyShow/HTML/Home.html',
    image1: "https://rawat2511.github.io/images/BookMyShow_1.png",
    image2: "https://rawat2511.github.io/images/BookMyShow_3.png"
  },
  {
    name: 'Fiverr Clone',
    description:
      'It is the first project that I have built to implement the CSS I have learnt. I have embedded the YouTube video in it and worked on the header and footer section. While building this project, I got some confidence about my css skills and it was my first step towards building a project.',
    stack: ['HTML', 'CSS', 'JavaScript', 'ES6'],
    sourceCode: 'https://github.com/rawat2511/Fiverr_Presentation',
    livePreview: 'https://construct-week-1-fiverr.netlify.app/',
    image1: "https://rawat2511.github.io/images/Fiverr_1.png",
    image2: "https://rawat2511.github.io/images/Fiverr_2.png"
  }
]

const skills = [
  {
    name: 'HTML',
    src: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082014/html5_0.png?itok=piXl_C7P'
  },
  {
    name: 'CSS',
    src: 'https://logo-all.ru/uploads/posts/2016-02/0_css3_logo.jpg'
  },
  {
    name: 'JavaScript',
    src: 'https://spng.subpng.com/20180720/bv/kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b13c2314.0304322315320700652463.jpg'
  },
  {
    name: 'React Js',
    src: 'https://spng.pngfind.com/pngs/s/122-1222517_react-hexagon-react-png-transparent-png.png'
  },
  {
    name: 'Redux',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDn-_kLAcnntK415Ct2XJd9Uz6A74Qs6LkvcoS6GNWzG-0zsBTBS1EUTYdJXXJn-JnqQ&usqp=CAU'
  },
  {
    name: 'Git',
    src: 'https://cdn.icon-icons.com/icons2/2108/PNG/512/git_icon_130933.png'
  },
  
  
  // 'Git'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'shubham25112000@gmail.com',
}

export { header, about, projects, skills, contact }
