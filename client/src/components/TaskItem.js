function TaskItem({ task, onDelete, onUpdate }) {
  return (
    <li
      style={{
        background: "#f8f9fa",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "4px",
        position: "relative",
      }}
    >
      <h3>{task.title}</h3>
      {task.description && <p>{task.description}</p>}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
        }}
      >
        <button
          onClick={() => onUpdate(task.id)}
          style={{
            marginRight: "10px",
            padding: "5px 10px",
            background: task.status === "pending" ? "#28a745" : "#ffc107",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {task.status === "pending" ? "Complete" : "Pending"}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          style={{
            padding: "5px 10px",
            background: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
