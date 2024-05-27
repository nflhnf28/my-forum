import { useDispatch } from "react-redux";
import ThreadInput from "../components/ThreadInput";
import { asyncAddThread } from "../states/threads/action";
import { useNavigate } from "react-router-dom";

function CreateThreadPage() {
  const dispatch = useDispatch(); // @TODO: get dispatch function from store
  const navigate = useNavigate();

  const onAddThread = ({ content }) => {
    // @TODO: dispatch async action to add thread
    dispatch(asyncAddThread({ content }));
    navigate('/');
  };

  return (
    <section className='create-thread'>
      <h2>Create a new Thread:</h2>
      <ThreadInput addThread={onAddThread} />
    </section>
  )
}

export default CreateThreadPage;