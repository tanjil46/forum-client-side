
import PropTypes from 'prop-types';
const AnnoncShowaftermap = ({ment}) => {
    const{title,image,desc,name}=ment
    return (
        <div>
            <div className="card lg:w-96 w-[full] bg-slate-500 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={image}   className="rounded-xl" />
    <p className='text-xl font-bold'>{name}</p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{desc}</p>
   
  </div>
</div>
        </div>
    );
};

AnnoncShowaftermap.propTypes={
  ment:PropTypes.object
    
    }
export default AnnoncShowaftermap;