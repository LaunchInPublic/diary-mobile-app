type Note = {
  id: string;
  title: string;
  content: string;
};

const Note = ({ note }: { note: Note }) => {
  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
    </div>
  );
};
