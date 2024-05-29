import { useContext, useState } from 'react';
import { UserContext } from './path-to-user-context'; // Adjust the path as necessary

function PopNewCard({ onCardAdd }) {
  const { task, setTask } = useContext(UserContext);
  const [formData, setFormData] = useState({
    title: task.title || '', // Assuming task has a title
    description: '' // Assuming you want to add a description
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTask(formData); // Update the context
    if (onCardAdd) {
      onCardAdd(formData);
    }
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card_container">
        {/* ... rest of your component */}
        <form className="pop-new-card_form" id="formNewCard" onSubmit={handleSubmit}>
          <div className="form-new_block">
            <label htmlFor="formTitle" className="subttl">Название задачи</label>
            <input
              className="form-new_input"
              type="text"
              name="title"
              id="formTitle"
              value={formData.title}
              onChange={handleChange}
              placeholder="Введите название задачи..."
              autoComplete="off"
            />
          </div>
          <div className="form-new_block">
            <label htmlFor="description" className="subttl">Описание задачи</label>
            <textarea
              className="form-new_area"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Введите описание задачи..."
            ></textarea>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default PopNewCard;