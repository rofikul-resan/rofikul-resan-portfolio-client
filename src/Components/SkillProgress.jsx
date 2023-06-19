const SkillProgress = ({ value, name }) => {
  return (
    <div className="flex gap-3 items-center">
      <h3 className="text-xl font-bold">{name}</h3>
      <progress
        className="progress progress-warning border border-black h-3"
        value={`${value}`}
        max="100"
      ></progress>{" "}
      <p className="flex gap-1">
        {value}
        <span>%</span>
      </p>
    </div>
  );
};

export default SkillProgress;
