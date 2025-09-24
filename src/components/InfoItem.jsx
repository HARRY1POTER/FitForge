// const InfoItem = ({ icon: Icon, label, value }) => {
//   return (
//     <div className="flex items-start gap-3">
//       <div className="text-teal-600 mt-1">{Icon && <Icon size={20} />}</div>
//       <div>
//         <h4 className="text-sm font-semibold text-gray-700">{label}</h4>
//         <p className="text-sm text-gray-500">{value || "Not provided"}</p>
//       </div>
//     </div>
//   );
// };

// export default InfoItem;


const InfoItem = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="text-teal-600 mt-1">{Icon && <Icon size={20} />}</div>
      <div className="break-words max-w-[200px]">
        <h4 className="text-sm font-semibold text-gray-700">{label}</h4>
        <p className="text-sm text-gray-500">{value || "Not provided"}</p>
      </div>
    </div>
  );
};

export default InfoItem;
