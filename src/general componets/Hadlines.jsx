import PropTypes from 'prop-types';

const Hadlines = ({title}) => {
    return (
        <div className="my-6">
            <p className="text-center font-bold text-2xl">{title}</p>
        </div>
    );
};

Hadlines.propTypes={
   title:PropTypes.any
    
    
    }
export default Hadlines;