import './SectionHeader.css'
const SectionHeader = ({heading,tagline}) => {
  return (
    <div className="nine">
      <h1>
        {heading}<span>{tagline}</span>
      </h1>
    </div>
  );
};

export default SectionHeader;
