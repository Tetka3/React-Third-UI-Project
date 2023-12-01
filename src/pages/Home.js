import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
      <div className="first">
        <h1>First Blog</h1>
        <p>The rise of the internet over the last few decades has provided many online business opportunities. Whether you are a stay-at-home parent, a student, or simply looking to earn some extra income, there are a variety of ways to make money online. From freelancing to e-commerce, online surveys and microtasks to affiliate marketing and online tutoring, there are plenty of avenues to explore. Nonetheless, the so many business opportunities and options available in the online business can be overwhelming to know where to start.</p>
        <br/>
        <Link to="/login"><button className="button" type="submit">Login</button></Link>      
        </div>
      <div className="second">
        <h1>Second</h1>
        <p>To help you determine what you should do to make money online, this article evaluates the different ways to make money online and provide tips and resources to help you succeed. So, if you’re ready to start earning money online at home or as a freelancer, let’s dive in and explore the world of online earning opportunities.</p>
      </div>
      <div className="third">
        <h1>Third</h1>
        <p>To help you determine what you should do to make money online, this article evaluates the different ways to make money online and provide tips and resources to help you succeed. So, if you’re ready to start earning money online at home or as a freelancer, let’s dive in and explore the world of online earning opportunities.</p>
        <br/>
        <p>To help you determine what you should do to make money online, this article evaluates the different ways to make money online and provide tips and resources to help you succeed. So, if you’re ready to start earning money online at home or as a freelancer, let’s dive in and explore the world of online earning opportunities.</p>
        <br/>
        <p>To help you determine what you should do to make money online, this article evaluates the different ways to make money online and provide tips and resources to help you succeed. So, if you’re ready to start earning money online at home or as a freelancer, let’s dive in and explore the world of online earning opportunities.</p>
        <br/>
        <p>To help you determine what you should do to make money online, this article evaluates the different ways to make money online and provide tips and resources to help you succeed. So, if you’re ready to start earning money online at home or as a freelancer, let’s dive in and explore the world of online earning opportunities.</p>
      </div>      
    </div>
  );
}

export default Home;
