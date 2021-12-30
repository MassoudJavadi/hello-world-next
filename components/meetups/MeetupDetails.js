import classes from "./MeetupDetails.module.css";

function MeetupDetails(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt="" />
      <h1>FirstMeetUP</h1>
    </section>
  );
}

export default MeetupDetails;
