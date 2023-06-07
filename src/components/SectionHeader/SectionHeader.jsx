import './SectionHeader.css'
const SectionHeader = ({heading,tagline}) => {
  return (
    <div className="nine">
      <h1>
        {heading}<span className='w-full lg:w-2/3 mx-auto px-2'>{tagline}</span>
      </h1>
    </div>
  );
};

export default SectionHeader;
