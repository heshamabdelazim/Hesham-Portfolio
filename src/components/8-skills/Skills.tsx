import Box from './Box';
import fieldsArr from './data';
import './skills.css';
function Skills() {

  return (
    <div id="parent" >
      {fieldsArr.map((f) => (
        <Box key={f.title} title={f.title} boxSlogan={f.boxSlogan} tags={f.tags} />
      ))}
    </div>
    
  )
}

export default Skills
