
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rawat2511.github.io/',
  title: 'SR.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shubham Rawat',
  role: 'MERN Stack Developer',
  description: "Aspiring Web Developer with good knowledge of React, Redux, Node, and MongoDB. Want to start my career as a software developer in a high-growth startup and make great products. I want to keep myself updated with the latest technological advances. Apart from this, I like to know about the startup ecosystem and about Personal Finance. I even like to play basketball whenever I get a chance and I have been a part of my school's basketball team.",
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
    name: 'Myntra Clone',
    description: 'Myntra is an online Shopping Site for Fashion & Lifestyle in India. I, along with my 3 teammates built this clone within one week. Here, we have have implemented sorting and filtering of products accoring to rating and price. The functionality of adding the products to cart and wishilist is implemented using Redux.',
    stack: ['HTML', 'CSS', 'JavaScript', 'ES6', 'React', 'Redux'],
    sourceCode: 'https://github.com/shreevalikushe/myntra_clone',
    livePreview: 'https://myntra-clone-gilt.vercel.app/',
    image1: "https://raw.githubusercontent.com/rawat2511/images/master/myntraHome.png",
    image2: "https://github.com/rawat2511/images/blob/master/myntraWishlist.png?raw=true"
  },
  {
    name: 'Book My Show Clone',
    description: "I along with my 2 other teammates made this website within 8 days. Here, one can select the seats to book the tickets. One can see the trailers of the latest movies which are fetched from YouTube using the YouTube API and we can filter the movies based on different genres, languages, and formats.",
    stack: ['HTML', 'CSS', 'JavaScript', 'ES6'],
    sourceCode: 'https://github.com/anishtiwari09/bookMyShow_Tribe_Project',
    livePreview: 'https://anishtiwari09.github.io/bookmyshowclones/HTML/Home.html',
    image1: "https://rawat2511.github.io/images/BookMyShow_1.png",
    image2: "https://rawat2511.github.io/images/BookMyShow_3.png"
  },
  {
    name: 'Fiverr Clone',
    description: "It is the first team project that we have built-in Masai School to implement the CSS we have learned. We have embedded the YouTube video in it and worked on the header and footer section. While building this project, we got some confidence in our CSS skills and it was our first step towards building a project.",
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
    name: 'Express',
    src: 'https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'
  },
  {
    name: 'Node',
    src: 'https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg'
  },
  {
    name: 'MongoDB',
    src: 'https://www.pngitem.com/pimgs/m/385-3850320_png-transparent-mongodb-icon-mongodb-logo-png-download.png'
  }
  // {
  //   name: 'Git',
  //   src: 'https://ih1.redbubble.net/image.818221338.4944/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'
  // }
  
  // 'Git'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'shubham25112000@gmail.com',
}

export { header, about, projects, skills, contact }
