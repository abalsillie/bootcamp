import Card from './Card';

const feline = {
  name: 'Fluffykins',
  description: 'A cat that acts like a dog',
  id: 1,
};

// these get stuck onto an object called props, passed into card function
export default function Display() {
  return (
    <div>
      {/* TODO: Write logic that will render a Card component for the kitten */}
      {/* TODO: Pass `name`, `description`, and `id` to the Card component as props */}
      <Card name={feline.name} description={feline.description} id={feline.id}/>
      {/* card is imported in, we are assigning values from the const feline to card to return in the display*/}
    </div>
  );
}
