const Spinner = ({ loading }) => {
  if (!loading) return null;
  
  return (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"></div>
    </div>
  );
};

export default Spinner;
