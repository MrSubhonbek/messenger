const EmptyState = () => {
  return (
    <div className="flex h-full items-center justify-center bg-neutral-950 px-4 py-10 text-neutral-100 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center">
        <h3 className="mt-2 text-2xl font-semibold">
          Select a chat or start a new conversation
        </h3>
      </div>
    </div>
  );
};

export default EmptyState;
