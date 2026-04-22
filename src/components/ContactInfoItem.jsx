const ContactInfoItem = ({ icon, title, children }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-gray-900 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  )
}

export default ContactInfoItem
