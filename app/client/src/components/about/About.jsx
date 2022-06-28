import "./about.scss";
import {motion} from 'framer-motion';
import About1 from '../assets/connect.jpg';
import About2 from '../assets/mentor.jpg';
import About3 from '../assets/empowerment.png';

const abouts = [
    {title:'Connect with fellow entrepreneurs and founders', description:'creating a community of women entrepreneurs so that you have a strong support system',imgUrl: About1},
    {title:'Access resources you need when starting a business', description:'whether you are finding a fellow startup co-founder or a experienced mentor, look no further.',imgUrl:About2},
    {title:'Put a spotlight on the stories of women entrepreneurs', description:'attend bi-monthly spotlight sharing sessions where females share their personal stories and journeys of starting their business',imgUrl:About3},
  
  ];
export default function about() {
  return (
    <div className="about" id="about">
        <h1>Become a member of SheforShe</h1>
      <div className = "wrapper">
       {abouts.map((about, index) => (
         <motion.div
          whileInView = {{opacity: 1}}
          whileHover ={{scale:1.1}}
          transition={{duration:0.5, type:'tween'}}
          className="about_item"
          key={about.title + index}
         >
           <img src={about.imgUrl} alt={about.title}/>
           <h2 style= {{ marginTop: 20}}>{about.title}</h2>
           <h3 style={{marginTop:10}}>{about.description} </h3>
         </motion.div>
       ))}
       </div>
    </div>
  )
}
