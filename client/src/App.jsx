import './App.css';
import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import NavTabs from './components/NavTabs';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});
// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <NavTabs />
      <Outlet />
    </ApolloProvider>
  );
}
export default App;




// import './App.css';
// import Nav from './components/NavTabs';
// import { Outlet } from 'react-router-dom';
// import React, { useState } from 'react'; 
// import Footer from './components/Footer';
// import { useLocation } from "react-router-dom";
// import SocialLinks from './components/SocialLinks';
// import FoodDonationModal from './FoodDonationModal'; 

// function App() {
//   const currentPage = useLocation().pathname;
//   const [isModalOpen, setIsModalOpen] = useState(false); // modal's state

//   const openModal = () => setIsModalOpen(true); // open modal
//   const closeModal = () => setIsModalOpen(false); // close modal

//   return (
//     <div>
//       <Nav />
//       <main className="mx-3">
//         <Outlet />
//         <button onClick={openModal} className="donate-button">Donate Food</button> {/* Button to open modal */}
//       </main>
//       <Footer />
//       <SocialLinks />
//       <p>Charity Connect</p>
//       <p>Copyright &copy; {new Date().getFullYear()} Charity Connect</p>

//       {/* Render the Food Donation Modal */}
//       <FoodDonationModal isOpen={isModalOpen} onRequestClose={closeModal} />
//     </div>
//   );
// }

// export default App;