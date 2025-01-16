const Button = ({ text, icon, onClick }) => {

  return (
    <button
      className="bg-neutral-50 py-2 px-4 border border-gray-400 rounded-2xl flex items-center gap-2"
      onClick={onClick}
    >
      {icon}
      <strong>{text}</strong>
    </button>
  )
}

export default Button