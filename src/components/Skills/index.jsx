import styled from "@emotion/styled";

const ListSkills = styled.ul({
  listStyleType: "none",
  padding: 0,
});

const ListItem = styled.li((props) => ({
  marginBottom: ".8em",
  background: "#eee",
  ">div": {
    background: "#3490dc",
    color: "#fff",
    padding: "3px 3px 3px 10px",
    width: props.percentage ? `${props.percentage}%` : "90%",
  },
}));

function Skills({ skills }) {
  return (
    <ListSkills>
      {skills.map(({ fields: skill }) => {
        return (
          <ListItem key={skill.label} percentage={skill?.percentage}>
            <div>{skill.label}</div>
          </ListItem>
        );
      })}
    </ListSkills>
  );
}

export default Skills;
