import React from 'react';

const Portfolio = () => {
//the "Project" component
  const styles = {
    div: {
      border: "solid",
      width: "100%",
      height: "300px",
      backgroundColor: "lightblue"
    },
    flexContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridGap: "10px"
    }
  }

  return (
    <div>
      <div style={styles.flexContainer} >
        <div style={styles.div}>
          <h3>Hitched</h3>
          <a href="https://hitched.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <button >Delpoyed Application</button></a>
          <a href="https://github.com/AdMarom/Final-Project.git" target="_blank" rel="noopener noreferrer">
          <button >GitHub Repository</button></a>
        </div>
        <div style={styles.div}>
          <h3>Budgetly</h3>
          <a href="https://budget-app-nodejs.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <button >Delpoyed Application</button></a>
          <a href="https://github.com/karinnesagir/Budgetly.git" target="_blank" rel="noopener noreferrer">
          <button >GitHub Repository</button></a>
        </div>
        <div style={styles.div}>
          <h3>Coding Quiz</h3>
          <a href="https://admarom.github.io/Code-Quiz-Challenge/" target="_blank" rel="noopener noreferrer">
          <button >Delpoyed Application</button></a>
          <a href="https://github.com/AdMarom/Code-Quiz-Challenge.git" target="_blank" rel="noopener noreferrer">
          <button >GitHub Repository</button></a>
        </div>
        <div style={styles.div}>
          <h3>Weather Application</h3>
          <a href="https://admarom.github.io/Weather-Application/" target="_blank" rel="noopener noreferrer">
          <button >Delpoyed Application</button></a>
          <a href="https://github.com/AdMarom/Weather-Application.git" target="_blank" rel="noopener noreferrer">
          <button >GitHub Repository</button></a>
        </div>
        <div style={styles.div}>
          <h3>What's Good</h3>
          <a href="https://admarom.github.io/WhatsGood-SearchEvents/" target="_blank" rel="noopener noreferrer">
          <button >Delpoyed Application</button></a>
          <a href="https://github.com/AdMarom/WhatsGood-SearchEvents.git" target="_blank" rel="noopener noreferrer">
          <button >GitHub Repository</button></a>
        </div>
        <div style={styles.div}>
          <h3>Note Taker</h3>
          <a href="https://note-taker-app-1000.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <button >Delpoyed Application</button></a>
          <a href="https://github.com/AdMarom/Note-Taker-Challenge.git" target="_blank" rel="noopener noreferrer">
          <button >GitHub Repository</button></a>
        </div>
      </div>


    </div>
  );
}
export default Portfolio;
