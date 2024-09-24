// import React, { useState, useEffect } from 'react';

// export default function Tasks() {
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
//   const formattedDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

//   return (
//     <div style={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)' }}>
//       <section>
//         <div>
//           <h1>Task Activity</h1>
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//           <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-between', gap: '1rem', fontSize: '18px' }}>
//             <li>All</li>
//             <li>WhatsApp</li>
//             <li>Email</li>
//             <li>LinkedIn</li>
//             <li>Google Maps</li>
//           </ul>
//           <ul style={{ listStyle: 'none', fontSize: '18px', color: '#0088CC', cursor: 'pointer' }}>
//             <li>Mark All as Read</li>
//           </ul>
//         </div>
//       </section>
//       <section>
//         <ul style={{ listStyle: 'none' }}>
//           <li style={{ background: '#0088CC1A', display : 'flex' , justifyContent : 'space-around' , padding : '2.5rem' , borderBottom : '0.5px solid black' }}>
//             <span>Your Email task has passed. Please click to view the  detail for further action</span>
//             <span style={{marginTop : '2.5%'}}>{formattedDay} at {formattedTime}</span>
//           </li>
//           <li style={{ background: '#0088CC1A', display : 'flex' , justifyContent : 'space-around' , padding : '2.5rem' , borderBottom : '0.5px solid black' }}>
//             <span>Your Email task has passed. Please click to view the  detail for further action</span>
//             <span style={{marginTop : '2.5%'}}>{formattedDay} at {formattedTime}</span>
//           </li>
//           <li style={{ display : 'flex' , justifyContent : 'space-around' , padding : '2.5rem' , borderBottom : '0.5px solid black' }}>
//             <span>Your Email task has passed. Please click to view the  detail for further action</span>
//             <span style={{marginTop : '2.5%'}}>{formattedDay} at {formattedTime}</span>
//           </li>
//           <li style={{ display : 'flex' , justifyContent : 'space-around' , padding : '2.5rem' , borderBottom : '0.5px solid black' }}>
//             <span>Your Email task has passed. Please click to view the  detail for further action</span>
//             <span style={{marginTop : '2.5%'}}>{formattedDay} at {formattedTime}</span>
//           </li>
//         </ul>
//       </section>
//       {/* <div>
//         <p>Time: {formattedTime}</p>
//         <p>Day: {formattedDay}</p>
//       </div> */}
//     </div>
//   )
// }
// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';

// export default function Tasks() {
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   const formattedDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

//   return (
//     <Box sx={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)', padding: '2rem' }}>
//       <Container>
//         {/* Header */}
//         <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Task Activity
//             </Typography>
//           </Grid>
//         </Grid>

//         {/* Task Navigation */}
//         <Grid container spacing={2} justifyContent="space-between">
//           <Grid item xs={12}>
//             <List sx={{ display: 'flex', justifyContent: 'space-around', padding: 0 , gap : '7rem' , width : 'max-content' , marginLeft : '1rem'}}>
//               {['All', 'WhatsApp', 'Email', 'LinkedIn', 'Google Maps'].map((label) => (
//                 <ListItem key={label} disablePadding sx={{ justifyContent: 'center', width: 'auto'}}>
//                   <ListItemText
//                   sx={{width : 'max-content'}}
//                     primary={label}
//                     primaryTypographyProps={{ variant: 'body1', sx: { fontWeight: 500, cursor: 'pointer' } }}
//                   />
//                 </ListItem>
//               ))}
//               <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
//                 <Button variant="outlined" color="primary">
//                   Mark All as Read
//                 </Button>
//               </Grid>
//             </List>
//           </Grid>
//         </Grid>

//         {/* Tasks Section */}
//         <Box component="section" sx={{ mt: 4 }}>
//           <List sx={{ padding: 0 }}>
//             {[1, 2, 3, 4, 5 ,6].map((task, index) => (
//               <ListItem
//                 key={index}
//                 sx={{
//                   background: index % 2 === 0 ? '#0088CC1A' : 'transparent',
//                   padding: '1.5rem',
//                   borderBottom: '0.5px solid black',
//                   justifyContent: 'space-between',
//                 }}
//               >
//                 <ListItemText
//                   primary="Your Email task has passed. Please click to view the detail for further action."
//                   primaryTypographyProps={{ variant: 'body1' }}
//                 />
//                 <Typography variant="body2" sx={{ marginTop: '1%' }}>
//                   {formattedDay} at {formattedTime}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Container>
//     </Box>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';

// export default function Tasks() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [filter, setFilter] = useState('All'); // State to track the selected filter
//   const [tasks, setTasks] = useState([
//     { id: 1, category: 'WhatsApp', text: 'Your WhatsApp task has passed.' },
//     { id: 2, category: 'Email', text: 'Your Email task has passed.' },
//     { id: 3, category: 'LinkedIn', text: 'Your LinkedIn task has passed.' },
//     { id: 4, category: 'Google Maps', text: 'Your Google Maps task has passed.' },
//     { id: 5, category: 'WhatsApp', text: 'Your WhatsApp task has passed.' },
//     { id: 6, category: 'Email', text: 'Your Email task has passed.' },
//   ]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   const formattedDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

//   // Function to filter tasks based on selected category
//   const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.category === filter);

//   return (
//     <Box sx={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)', padding: '2rem' }}>
//       <Container>
//         {/* Header */}
//         <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Task Activity
//             </Typography>
//           </Grid>
//         </Grid>

//         {/* Task Navigation */}
//         <Grid container spacing={2} justifyContent="space-between">
//           <Grid item xs={12}>
//             <List sx={{ display: 'flex', justifyContent: 'space-around', padding: 0, gap: '7rem', width: 'max-content', marginLeft: '1rem' }}>
//               {['All', 'WhatsApp', 'Email', 'LinkedIn', 'Google Maps'].map((label) => (
//                 <ListItem
//                   key={label}
//                   disablePadding
//                   sx={{ justifyContent: 'center', width: 'auto', cursor: 'pointer' }}
//                   onClick={() => setFilter(label)} // Set filter on click
//                 >
//                   <ListItemText
//                     sx={{ width: 'max-content' }}
//                     primary={label}
//                     primaryTypographyProps={{ variant: 'body1', sx: { fontWeight: 500, cursor: 'pointer', color: filter === label ? 'blue' : 'black' } }}
//                   />
//                 </ListItem>
//               ))}
//               <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
//                 <Button variant="outlined" color="primary">
//                   Mark All as Read
//                 </Button>
//               </Grid>
//             </List>
//           </Grid>
//         </Grid>

//         {/* Tasks Section */}
//         <Box component="section" sx={{ mt: 4 }}>
//           <List sx={{ padding: 0 }}>
//             {filteredTasks.map((task, index) => (
//               <ListItem
//                 key={task.id}
//                 sx={{
//                   background: index % 2 === 0 ? '#0088CC1A' : 'transparent',
//                   padding: '1.5rem',
//                   borderBottom: '0.5px solid black',
//                   justifyContent: 'space-between',
//                 }}
//               >
//                 <ListItemText
//                   primary={task.text}
//                   primaryTypographyProps={{ variant: 'body1' }}
//                 />
//                 <Typography variant="body2" sx={{ marginTop: '1%' }}>
//                   {formattedDay} at {formattedTime}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Container>
//     </Box>
//   );
// // }
// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';

// export default function Tasks() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [filter, setFilter] = useState('All'); // State to track the selected filter
//   const [tasks, setTasks] = useState([
//     { id: 1, category: 'WhatsApp', text: 'Your WhatsApp task has passed.', read: false },
//     { id: 2, category: 'Email', text: 'Your Email task has passed.', read: false },
//     { id: 3, category: 'LinkedIn', text: 'Your LinkedIn task has passed.', read: false },
//     { id: 4, category: 'Google Maps', text: 'Your Google Maps task has passed.', read: false },
//     { id: 5, category: 'WhatsApp', text: 'Your WhatsApp task has passed.', read: false },
//     { id: 6, category: 'Email', text: 'Your Email task has passed.', read: false },
//   ]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   const formattedDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

//   // Function to filter tasks based on selected category
//   const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.category === filter);

//   // Function to mark all tasks as read
//   const markAllAsRead = () => {
//     setTasks(prevTasks => prevTasks.map(task => ({ ...task, read: true })));
//   };

//   return (
//     <Box sx={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)', padding: '2rem' }}>
//       <Container>
//         {/* Header */}
//         <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Task Activity
//             </Typography>
//           </Grid>
//         </Grid>

//         {/* Task Navigation */}
//         <Grid container spacing={2} justifyContent="space-between">
//           <Grid item xs={12}>
//             <List sx={{ display: 'flex', justifyContent: 'space-around', padding: 0, gap: '7rem', width: 'max-content', marginLeft: '1rem' }}>
//               {['All', 'WhatsApp', 'Email', 'LinkedIn', 'Google Maps'].map((label) => (
//                 <ListItem
//                   key={label}
//                   disablePadding
//                   sx={{ justifyContent: 'center', width: 'auto', cursor: 'pointer' }}
//                   onClick={() => setFilter(label)} // Set filter on click
//                 >
//                   <ListItemText
//                     sx={{ width: 'max-content' }}
//                     primary={label}
//                     primaryTypographyProps={{ variant: 'body1', sx: { fontWeight: 500, cursor: 'pointer', color: filter === label ? 'blue' : 'black' } }}
//                   />
//                 </ListItem>
//               ))}
//               <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
//                 <Button variant="outlined" color="primary" onClick={markAllAsRead}>
//                   Mark All as Read
//                 </Button>
//               </Grid>
//             </List>
//           </Grid>
//         </Grid>

//         {/* Tasks Section */}
//         <Box component="section" sx={{ mt: 4 }}>
//           <List sx={{ padding: 0 }}>
//             {filteredTasks.map((task, index) => (
//               <ListItem
//                 key={task.id}
//                 sx={{
//                   background: task.read ? '#CCCCCC' : (index % 2 === 0 ? '#0088CC1A' : 'transparent'),
//                   padding: '1.5rem',
//                   borderBottom: '0.5px solid black',
//                   justifyContent: 'space-between',
//                 }}
//               >
//                 <ListItemText
//                   primary={task.text}
//                   primaryTypographyProps={{ variant: 'body1', sx: { textDecoration: task.read ? 'line-through' : 'none' } }}
//                 />
//                 <Typography variant="body2" sx={{ marginTop: '1%' }}>
//                   {formattedDay} at {formattedTime}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Container>
//     </Box>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // For handling redirection

// export default function Tasks() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [filter, setFilter] = useState('All'); // State to track the selected filter
//   const [tasks, setTasks] = useState([]); // State to hold tasks fetched from API
//   const navigate = useNavigate(); // For programmatically navigating to different paths

//   // Fetch tasks from API
//   useEffect(() => {
//     // Simulated API call
//     const fetchTasks = async () => {
//       const response = await fetch('https://api.example.com/notifications'); // Replace with your API endpoint
//       const data = await response.json();
//       setTasks(data); // Set tasks from API response
//     };

//     fetchTasks();

//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   const formattedDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

//   // Function to filter tasks based on selected category
//   const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.category === filter);

//   // Function to mark all tasks as read
//   const markAllAsRead = () => {
//     setTasks(prevTasks => prevTasks.map(task => ({ ...task, read: true })));
//   };

//   // Function to handle task click and redirect to different paths
//   const handleTaskClick = (url) => {
//     navigate(url); // Redirect to the specified path
//   };

//   return (
//     <Box sx={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)', padding: '2rem' }}>
//       <Container>
//         {/* Header */}
//         <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Task Activity
//             </Typography>
//           </Grid>
//         </Grid>

//         {/* Task Navigation */}
//         <Grid container spacing={2} justifyContent="space-between">
//           <Grid item xs={12}>
//             <List sx={{ display: 'flex', justifyContent: 'space-around', padding: 0, gap: '7rem', width: 'max-content', marginLeft: '1rem' }}>
//               {['All', 'WhatsApp', 'Email', 'LinkedIn', 'Google Maps'].map((label) => (
//                 <ListItem
//                   key={label}
//                   disablePadding
//                   sx={{ justifyContent: 'center', width: 'auto', cursor: 'pointer' }}
//                   onClick={() => setFilter(label)} // Set filter on click
//                 >
//                   <ListItemText
//                     sx={{ width: 'max-content' }}
//                     primary={label}
//                     primaryTypographyProps={{ variant: 'body1', sx: { fontWeight: 500, cursor: 'pointer', color: filter === label ? 'blue' : 'black' } }}
//                   />
//                 </ListItem>
//               ))}
//               <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
//                 <Button variant="outlined" color="primary" onClick={markAllAsRead}>
//                   Mark All as Read
//                 </Button>
//               </Grid>
//             </List>
//           </Grid>
//         </Grid>

//         {/* Tasks Section */}
//         <Box component="section" sx={{ mt: 4 }}>
//           <List sx={{ padding: 0 }}>
//             {filteredTasks.map((task, index) => (
//               <ListItem
//                 key={task.id}
//                 sx={{
//                   background: task.read ? '#CCCCCC' : (index % 2 === 0 ? '#0088CC1A' : 'transparent'),
//                   padding: '1.5rem',
//                   borderBottom: '0.5px solid black',
//                   justifyContent: 'space-between',
//                   cursor: 'pointer'
//                 }}
//                 onClick={() => handleTaskClick(task.url)} // Redirect to task-specific URL
//               >
//                 <ListItemText
//                   primary={task.text}
//                   primaryTypographyProps={{ variant: 'body1', sx: { textDecoration: task.read ? 'line-through' : 'none' } }}
//                 />
//                 <Typography variant="body2" sx={{ marginTop: '1%' }}>
//                   {formattedDay} at {formattedTime}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // For handling redirection

// export default function Tasks() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [filter, setFilter] = useState('All'); // State to track the selected filter
//   const [tasks, setTasks] = useState([]); // State to hold tasks fetched from API
//   const navigate = useNavigate(); // For programmatically navigating to different paths

//   // Simulating an API call
//   useEffect(() => {
//     const fetchTasks = async () => {
//       // Hardcoded tasks as a temporary API response
//       const data = [
//         { id: 1, category: "WhatsApp", text: "Your WhatsApp task has passed.", url: "/whatsapp-task", read: false },
//         { id: 2, category: "Email", text: "Your Email task has passed.", url: "/email-task", read: false },
//         { id: 3, category: "LinkedIn", text: "Your LinkedIn task has passed.", url: "/linkedin-task", read: false },
//         { id: 4, category: "Google Maps", text: "Your Google Maps task has passed.", url: "/maps-task", read: false }
//       ];

//       setTasks(data); // Set the tasks
//     };

//     fetchTasks();

//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   const formattedDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

//   // Function to filter tasks based on selected category
//   const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.category === filter);

//   // Function to mark all tasks as read and remove background color for %2 items
//   const markAllAsRead = () => {
//     setTasks(prevTasks => prevTasks.map(task => ({ ...task, read: true })));
//   };

//   // Function to handle task click and redirect to different paths
//   const handleTaskClick = (url) => {
//     navigate(url); // Redirect to the specified path
//   };

//   return (
//     <Box sx={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)', padding: '2rem' }}>
//       <Container>
//         {/* Header */}
//         <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Task Activity
//             </Typography>
//           </Grid>
//         </Grid>

//         {/* Task Navigation */}
//         <Grid container spacing={2} justifyContent="space-between">
//           <Grid item xs={12}>
//             <List sx={{ display: 'flex', justifyContent: 'space-around', padding: 0, gap: '7rem', width: 'max-content', marginLeft: '1rem' }}>
//               {['All', 'WhatsApp', 'Email', 'LinkedIn', 'Google Maps'].map((label) => (
//                 <ListItem
//                   key={label}
//                   disablePadding
//                   sx={{ justifyContent: 'center', width: 'auto', cursor: 'pointer' }}
//                   onClick={() => setFilter(label)} // Set filter on click
//                 >
//                   <ListItemText
//                     sx={{ width: 'max-content' }}
//                     primary={label}
//                     primaryTypographyProps={{ variant: 'body1', sx: { fontWeight: 500, cursor: 'pointer', color: filter === label ? 'blue' : 'black' } }}
//                   />
//                 </ListItem>
//               ))}
//               <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
//                 <Button variant="outlined" color="primary" onClick={markAllAsRead}>
//                   Mark All as Read
//                 </Button>
//               </Grid>
//             </List>
//           </Grid>
//         </Grid>

//         {/* Tasks Section */}
//         <Box component="section" sx={{ mt: 4 }}>
//           <List sx={{ padding: 0 }}>
//             {filteredTasks.map((task, index) => (
//               <ListItem
//                 key={task.id}
//                 sx={{
//                   background: task.read ? '#CCCCCC' : (index % 2 === 0 ? '#0088CC1A' : 'transparent'),
//                   padding: '1.5rem',
//                   borderBottom: '0.5px solid black',
//                   justifyContent: 'space-between',
//                   cursor: 'pointer'
//                 }}
//                 onClick={() => handleTaskClick(task.url)} // Redirect to task-specific URL
//               >
//                 <ListItemText
//                   primary={task.text}
//                   primaryTypographyProps={{ variant: 'body1', sx: { textDecoration: task.read ? 'line-through' : 'none' } }}
//                 />
//                 <Typography variant="body2" sx={{ marginTop: '1%' }}>
//                   {formattedDay} at {formattedTime}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // For handling redirection

// export default function Tasks() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [filter, setFilter] = useState('All'); // State to track the selected filter
//   const [tasks, setTasks] = useState([]); // State to hold tasks fetched from API
//   const navigate = useNavigate(); // For programmatically navigating to different paths

//   // Simulating an API call
//   useEffect(() => {
//     const fetchTasks = async () => {
//       // Hardcoded tasks as a temporary API response
//       const data = [
//         { id: 1, category: "WhatsApp", text: "Your WhatsApp task has passed.", url: "/whatsapp-automation", read: false },
//         { id: 2, category: "Email", text: "Your Email task has passed.", url: "/email-automation", read: false },
//         { id: 3, category: "LinkedIn", text: "Your LinkedIn task has passed.", url: "/linkedin-scrapping", read: true },
//         { id: 4, category: "Google Maps", text: "Your Google Maps task has passed.", url: "/google-map", read: true },
//         { id: 4, category: "Google Maps", text: "Your Google Maps task has passed.", url: "/google-map", read: true },
//         { id: 4, category: "Google Maps", text: "Your Google Maps task has passed.", url: "/google-map", read: true },
//       ];

//       setTasks(data); // Set the tasks
//     };

//     fetchTasks();

//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   const formattedDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

//   // Function to filter tasks based on selected category
//   const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.category === filter);

//   // Function to mark all tasks as read and remove background color for %2 items
//   const markAllAsRead = () => {
//     setTasks(prevTasks => prevTasks.map(task => ({ ...task, read: true })));
//   };

//   // Function to handle task click and redirect to different paths
//   const handleTaskClick = (url) => {
//     navigate(url); // Redirect to the specified path
//   };

//   return (
//     <Box sx={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)', padding: '2rem' }}>
//       <Container>
//         {/* Header */}
//         <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Task Activity
//             </Typography>
//           </Grid>
//         </Grid>

//         {/* Task Navigation */}
//         <Grid container spacing={2} justifyContent="space-between">
//           <Grid item xs={12}>
//             <List sx={{ display: 'flex', justifyContent: 'space-around', padding: 0, gap: '7rem', width: 'max-content', marginLeft: '1rem' }}>
//               {['All', 'WhatsApp', 'Email', 'LinkedIn', 'Google Maps'].map((label) => (
//                 <ListItem
//                   key={label}
//                   disablePadding
//                   sx={{ justifyContent: 'center', width: 'auto', cursor: 'pointer' }}
//                   onClick={() => setFilter(label)} // Set filter on click
//                 >
//                   <ListItemText
//                     sx={{ width: 'max-content' }}
//                     primary={label}
//                     primaryTypographyProps={{ variant: 'body1', sx: { fontWeight: 500, cursor: 'pointer', color: filter === label ? 'blue' : 'black' } }}
//                   />
//                 </ListItem>
//               ))}
//               <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
//                 <Button variant="outlined" color="primary" onClick={markAllAsRead}>
//                   Mark All as Read
//                 </Button>
//               </Grid>
//             </List>
//           </Grid>
//         </Grid>

//         {/* Tasks Section */}
//         <Box component="section" sx={{ mt: 4 }}>
//           <List sx={{ padding: 0 }}>
//             {filteredTasks.map((task, index) => (
//               <ListItem
//                 key={task.id}
//                 sx={{
//                   // background: task.read ? 'transparent' : (index % 2 === 0 ? '#0088CC1A' : 'transparent'),
//                   background: task.read ? 'transparent' : '#0088CC1A',
//                   padding: '1.5rem',
//                   borderBottom: '0.5px solid black',
//                   justifyContent: 'space-between',
//                   cursor: 'pointer'
//                 }}
//                 onClick={() => handleTaskClick(task.url)} // Redirect to task-specific URL
//               >
//                 <ListItemText
//                   primary={task.text}
//                   primaryTypographyProps={{ variant: 'body1' }}
//                 />
//                 <Typography variant="body2" sx={{ marginTop: '1%' }}>
//                   {formattedDay} at {formattedTime}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Container>
//     </Box>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // For handling redirection

// export default function Tasks() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [filter, setFilter] = useState('All'); // State to track the selected filter
//   const [tasks, setTasks] = useState([]); // State to hold tasks fetched from API
//   const navigate = useNavigate(); // For programmatically navigating to different paths

//   // Simulating an API call
//   useEffect(() => {
//     const fetchTasks = async () => {
//       // Hardcoded tasks as a temporary API response
//       const data = [
//         { id: 1, category: "WhatsApp", text: "Your WhatsApp task has passed.", url: "/whatsapp-automation", read: false },
//         { id: 2, category: "Email", text: "Your Email task has passed.", url: "/email-automation", read: false },
//         { id: 3, category: "LinkedIn", text: "Your LinkedIn task has passed.", url: "/linkedin-scrapping", read: true },
//         { id: 4, category: "Google Maps", text: "Your Google Maps task has passed.", url: "/google-map", read: true },
//         { id: 4, category: "Google Maps", text: "Your Google Maps task has passed.", url: "/google-map", read: true },
//         { id: 4, category: "Google Maps", text: "Your Google Maps task has passed.", url: "/google-map", read: true },
//       ];

//       setTasks(data); // Set the tasks
//     };

//     fetchTasks();

//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   const formattedDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

//   // Function to filter tasks based on selected category
//   const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.category === filter);

//   // Function to mark all tasks as read and remove background color for %2 items
//   const markAllAsRead = () => {
//     setTasks(prevTasks => prevTasks.map(task => ({ ...task, read: true })));
//   };

//   // Function to handle task click and redirect to different paths
//   const handleTaskClick = (url) => {
//     markAllAsRead();
//     // navigate(url); // Redirect to the specified path
//   };

//   return (
//     <Box sx={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)', padding: '2rem' }}>
//       <Container>
//         {/* Header */}
//         <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Task Activity
//             </Typography>
//           </Grid>
//         </Grid>

//         {/* Task Navigation */}
//         <Grid container spacing={2} justifyContent="space-between">
//           <Grid item xs={12}>
//             <List sx={{ display: 'flex', justifyContent: 'space-around', padding: 0, gap: '7rem', width: 'max-content', marginLeft: '1rem' }}>
//               {['All', 'WhatsApp', 'Email', 'LinkedIn', 'Google Maps'].map((label) => (
//                 <ListItem
//                   key={label}
//                   disablePadding
//                   sx={{ justifyContent: 'center', width: 'auto', cursor: 'pointer' }}
//                   onClick={() => setFilter(label)} // Set filter on click
//                 >
//                   <ListItemText
//                     sx={{ width: 'max-content' }}
//                     primary={label}
//                     primaryTypographyProps={{ variant: 'body1', sx: { fontWeight: 500, cursor: 'pointer', color: filter === label ? 'blue' : 'black' } }}
//                   />
//                 </ListItem>
//               ))}
//               <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
//                 <Button variant="outlined" color="primary" onClick={markAllAsRead}>
//                   Mark All as Read
//                 </Button>
//               </Grid>
//             </List>
//           </Grid>
//         </Grid>

//         {/* Tasks Section */}
//         <Box component="section" sx={{ mt: 4 }}>
//           <List sx={{ padding: 0 }}>
//             {filteredTasks.map((task, index) => (
//               <ListItem
//                 key={task.id}
//                 sx={{
//                   // background: task.read ? 'transparent' : (index % 2 === 0 ? '#0088CC1A' : 'transparent'),
//                   background: task.read ? 'transparent' : '#0088CC1A',
//                   padding: '1.5rem',
//                   borderBottom: '0.5px solid black',
//                   justifyContent: 'space-between',
//                   cursor: 'pointer'
//                 }}
//                 onClick={() => handleTaskClick(task.url)} // Redirect to task-specific URL
//               >
//                 <ListItemText
//                   primary={task.text}
//                   primaryTypographyProps={{ variant: 'body1' }}
//                 />
//                 <Typography variant="body2" sx={{ marginTop: '1%' }}>
//                   {formattedDay} at {formattedTime}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // For handling redirection

// export default function Tasks() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [filter, setFilter] = useState('All'); // State to track the selected filter
//   const [tasks, setTasks] = useState([]); // State to hold tasks fetched from API
//   const navigate = useNavigate(); // For programmatically navigating to different paths

//   // Simulating an API call
//   useEffect(() => {
//     const fetchTasks = async () => {
//       // Hardcoded tasks as a temporary API response
//       const data = [
//         { id: 1, category: "WhatsApp", text: "Your WhatsApp task has passed.", url: "/whatsapp-automation", read: false },
//         { id: 2, category: "Email", text: "Your Email task has passed.", url: "/email-automation", read: false },
//         { id: 3, category: "LinkedIn", text: "Your LinkedIn task has passed.", url: "/linkedin-scrapping", read: false },
//         { id: 4, category: "Google Maps", text: "Your Google Maps task has passed.", url: "/google-map", read: false },
//       ];

//       setTasks(data); // Set the tasks
//     };

//     fetchTasks();

//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   const formattedDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

//   // Function to filter tasks based on selected category
//   const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.category === filter);

//   // Function to handle task click and redirect to different paths
//   const handleTaskClick = (url, index) => {
//     // Mark the clicked task as read by updating its state
//     setTasks(prevTasks => {
//       const updatedTasks = [...prevTasks];
//       updatedTasks[index].read = true; // Mark the specific task as read
//       return updatedTasks;
//     });

//     // navigate(url); // Redirect to the specified path
//   };

//   return (
//     <Box sx={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)', padding: '2rem' }}>
//       <Container>
//         {/* Header */}
//         <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Task Activity
//             </Typography>
//           </Grid>
//         </Grid>

//         {/* Task Navigation */}
//         <Grid container spacing={2} justifyContent="space-between">
//           <Grid item xs={12}>
//             <List sx={{ display: 'flex', justifyContent: 'space-around', padding: 0, gap: '7rem', width: 'max-content', marginLeft: '1rem' }}>
//               {['All', 'WhatsApp', 'Email', 'LinkedIn', 'Google Maps'].map((label) => (
//                 <ListItem
//                   key={label}
//                   disablePadding
//                   sx={{ justifyContent: 'center', width: 'auto', cursor: 'pointer' }}
//                   onClick={() => setFilter(label)} // Set filter on click
//                 >
//                   <ListItemText
//                     sx={{ width: 'max-content' }}
//                     primary={label}
//                     primaryTypographyProps={{ variant: 'body1', sx: { fontWeight: 500, cursor: 'pointer', color: filter === label ? 'blue' : 'black' } }}
//                   />
//                 </ListItem>
//               ))}
//               <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
//                 <Button variant="outlined" color="primary" onClick={() => setTasks(tasks.map(task => ({ ...task, read: true })))}>
//                   Mark All as Read
//                 </Button>
//               </Grid>
//             </List>
//           </Grid>
//         </Grid>

//         {/* Tasks Section */}
//         <Box component="section" sx={{ mt: 4 }}>
//           <List sx={{ padding: 0 }}>
//             {filteredTasks.map((task, index) => (
//               <ListItem
//                 key={task.id}
//                 sx={{
//                   background: task.read ? 'transparent' : '#0088CC1A',
//                   padding: '1.5rem',
//                   borderBottom: '0.5px solid black',
//                   justifyContent: 'space-between',
//                   cursor: 'pointer'
//                 }}
//                 onClick={() => handleTaskClick(task.url, index)} // Redirect to task-specific URL
//               >
//                 <ListItemText
//                   primary={task.text}
//                   primaryTypographyProps={{ variant: 'body1' }}
//                 />
//                 <Typography variant="body2" sx={{ marginTop: '1%' }}>
//                   {formattedDay} at {formattedTime}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // For handling redirection

// export default function Tasks() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [filter, setFilter] = useState('All'); // State to track the selected filter
//   const [tasks, setTasks] = useState([]); // State to hold tasks fetched from API
//   const navigate = useNavigate(); // For programmatically navigating to different paths

//   // Simulating an API call
//   useEffect(() => {
//     const fetchTasks = async () => {
//       // Hardcoded tasks as a temporary API response
//       const data = [
//         { id: 1, category: "WhatsApp", text: "Your WhatsApp task has passed.", url: "/whatsapp-automation", read: false },
//         { id: 2, category: "Email", text: "Your Email task has passed.", url: "/email-automation", read: false },
//         { id: 3, category: "LinkedIn", text: "Your LinkedIn task has passed.", url: "/linkedin-scrapping", read: false },
//         { id: 4, category: "Google Maps", text: "Your Google Maps task has passed.", url: "/google-map", read: false },
//         // Additional tasks
//         { id: 5, category: "Slack", text: "You have a new message on Slack.", url: "/slack-messages", read: false },
//         { id: 6, category: "Zoom", text: "Your Zoom meeting starts in 10 minutes.", url: "/zoom-meeting", read: false },
//         { id: 7, category: "GitHub", text: "Your pull request has been approved.", url: "/github-notifications", read: false },
//         { id: 8, category: "Task Manager", text: "You have 3 tasks due today.", url: "/task-manager", read: false },
//         { id: 9, category: "Calendar", text: "You have a meeting scheduled for tomorrow.", url: "/calendar", read: false },
//         { id: 10, category: "Alerts", text: "Check your account alerts.", url: "/alerts", read: false },
//       ];

//       setTasks(data); // Set the tasks
//     };


//     fetchTasks();

//     // Load tasks from local storage
//     const storedTasks = JSON.parse(localStorage.getItem('tasks'));
//     if (storedTasks) {
//       setTasks(storedTasks);
//     }

//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   const formattedDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

//   // Function to filter tasks based on selected category
//   const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.category === filter);

//   // Function to handle task click and redirect to different paths
//   const handleTaskClick = (url, index) => {
//     // Mark the clicked task as read by updating its state
//     const updatedTasks = [...tasks];
//     updatedTasks[index].read = true; // Mark the specific task as read
//     setTasks(updatedTasks); // Update the state

//     // Save updated tasks to local storage
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks));

//     navigate(url); // Redirect to the specified path
//   };

//   return (
//     <Box sx={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)', padding: '2rem' }}>
//       <Container>
//         {/* Header */}
//         <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Task Activity
//             </Typography>
//           </Grid>
//         </Grid>

//         {/* Task Navigation */}
//         <Grid container spacing={2} justifyContent="space-between">
//           <Grid item xs={12}>
//             <List sx={{ display: 'flex', justifyContent: 'space-around', padding: 0, gap: '7rem', width: 'max-content', marginLeft: '1rem' }}>
//               {['All', 'WhatsApp', 'Email', 'LinkedIn', 'Google Maps'].map((label) => (
//                 <ListItem
//                   key={label}
//                   disablePadding
//                   sx={{ justifyContent: 'center', width: 'auto', cursor: 'pointer' }}
//                   onClick={() => setFilter(label)} // Set filter on click
//                 >
//                   <ListItemText
//                     sx={{ width: 'max-content' }}
//                     primary={label}
//                     primaryTypographyProps={{ variant: 'body1', sx: { fontWeight: 500, cursor: 'pointer', color: filter === label ? 'blue' : 'black' } }}
//                   />
//                 </ListItem>
//               ))}
//               <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
//                 <Button variant="outlined" color="primary" onClick={() => {
//                   const updatedTasks = tasks.map(task => ({ ...task, read: true }));
//                   setTasks(updatedTasks);
//                   localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//                 }}>
//                   Mark All as Read
//                 </Button>
//               </Grid>
//             </List>
//           </Grid>
//         </Grid>

//         {/* Tasks Section */}
//         <Box component="section" sx={{ mt: 4 }}>
//           <List sx={{ padding: 0 }}>
//             {filteredTasks.map((task, index) => (
//               <ListItem
//                 key={task.id}
//                 sx={{
//                   background: task.read ? 'transparent' : '#0088CC1A',
//                   padding: '1.5rem',
//                   borderBottom: '0.5px solid black',
//                   justifyContent: 'space-between',
//                   cursor: 'pointer'
//                 }}
//                 onClick={() => handleTaskClick(task.url, index)} // Redirect to task-specific URL
//               >
//                 <ListItemText
//                   primary={task.text}
//                   primaryTypographyProps={{ variant: 'body1' }}
//                 />
//                 <Typography variant="body2" sx={{ marginTop: '1%' }}>
//                   {formattedDay} at {formattedTime}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Container>
//     </Box>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // For handling redirection

// export default function Tasks() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [filter, setFilter] = useState('All'); // State to track the selected filter
//   const [tasks, setTasks] = useState([]); // State to hold tasks fetched from API
//   const navigate = useNavigate(); // For programmatically navigating to different paths

//   // Simulating an API call
//   useEffect(() => {
//     const fetchTasks = async () => {
//       // Hardcoded tasks as a temporary API response
//       const hardcodedTasks = [
//         { id: 1, category: "WhatsApp", text: "Your WhatsApp task has passed.", url: "/whatsapp-automation", read: false },
//         { id: 2, category: "Email", text: "Your Email task has passed.", url: "/email-automation", read: false },
//         { id: 3, category: "LinkedIn", text: "Your LinkedIn task has passed.", url: "/linkedin-scrapping", read: false },
//         { id: 4, category: "Google Maps", text: "Your Google Maps task has passed.", url: "/google-map", read: false },
//         // Additional tasks
//         { id: 5, category: "WhatsApp", text: "You have a new message on Slack.", url: "/slack-messages", read: false },
//         { id: 6, category: "Email", text: "Your Zoom meeting starts in 10 minutes.", url: "/zoom-meeting", read: true },
//         { id: 7, category: "LinkedIn", text: "Your pull request has been approved.", url: "/github-notifications", read: false },
//         { id: 8, category: "Google Maps", text: "You have 3 tasks due today.", url: "/task-manager", read: false },
//         { id: 9, category: "WhatsApp", text: "You have a meeting scheduled for tomorrow.", url: "/calendar", read: false },
//         { id: 10, category: "Email", text: "Check your account alerts.", url: "/alerts", read: false },
//         { id: 9, category: "LinkedIn", text: "You have a meeting scheduled for tomorrow.", url: "/calendar", read: false },
//         { id: 10, category: "Google Maps", text: "Check your account alerts.", url: "/alerts", read: false },
//       ];

//       // Load tasks from local storage
//       const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

//       // Merge hardcoded tasks with stored tasks
//       const allTasks = [...hardcodedTasks, ...storedTasks];

//       setTasks(allTasks); // Set the tasks
//     };

//     fetchTasks();

//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   const formattedDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

//   // Function to filter tasks based on selected category
//   const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.category === filter);

//   // Function to handle task click and redirect to different paths
//   const handleTaskClick = (url, index) => {
//     // Mark the clicked task as read by updating its state
//     const updatedTasks = [...tasks];
//     updatedTasks[index].read = true; // Mark the specific task as read
//     setTasks(updatedTasks); // Update the state

//     // Save updated tasks to local storage
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks));

//     navigate(url); // Redirect to the specified path
//   };

//   return (
//     <Box sx={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)', padding: '2rem' }}>
//       <Container>
//         {/* Header */}
//         <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Task Activity
//             </Typography>
//           </Grid>
//         </Grid>

//         {/* Task Navigation */}
//         <Grid container spacing={2} justifyContent="space-between">
//           <Grid item xs={12}>
//             <List sx={{ display: 'flex', justifyContent: 'space-around', padding: 0, gap: '7rem', width: 'max-content', marginLeft: '1rem' }}>
//               {['All', 'WhatsApp', 'Email', 'LinkedIn', 'Google Maps'].map((label) => (
//                 <ListItem
//                   key={label}
//                   disablePadding
//                   sx={{ justifyContent: 'center', width: 'auto', cursor: 'pointer' }}
//                   onClick={() => setFilter(label)} // Set filter on click
//                 >
//                   <ListItemText
//                     sx={{ width: 'max-content' }}
//                     primary={label}
//                     primaryTypographyProps={{ variant: 'body1', sx: { fontWeight: 500, cursor: 'pointer', color: filter === label ? 'blue' : 'black' } }}
//                   />
//                 </ListItem>
//               ))}
//               <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
//                 <Button variant="outlined" color="primary" onClick={() => {
//                   const updatedTasks = tasks.map(task => ({ ...task, read: true }));
//                   setTasks(updatedTasks);
//                   localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//                 }}>
//                   Mark All as Read
//                 </Button>
//               </Grid>
//             </List>
//           </Grid>
//         </Grid>

//         {/* Tasks Section */}
//         <Box component="section" sx={{ mt: 4 }}>
//           <List sx={{ padding: 0 }}>
//             {filteredTasks.map((task, index) => (
//               <ListItem
//                 key={task.id}
//                 sx={{
//                   background: task.read ? 'transparent' : '#0088CC1A',
//                   padding: '1.5rem',
//                   borderBottom: '0.5px solid black',
//                   justifyContent: 'space-between',
//                   cursor: 'pointer'
//                 }}
//                 onClick={() => handleTaskClick(task.url, index)} // Redirect to task-specific URL
//               >
//                 <ListItemText
//                   primary={task.text}
//                   // primary={`${index}. ${task.text}`}
//                   primaryTypographyProps={{ variant: 'body1' }}
//                 />
//                 <Typography variant="body2" sx={{ marginTop: '1%' }}>
//                   {formattedDay} at {formattedTime}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Container>
//     </Box>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // For handling redirection

// export default function Tasks() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [filter, setFilter] = useState('All'); // State to track the selected filter
//   const [tasks, setTasks] = useState([]); // State to hold tasks fetched from API
//   const navigate = useNavigate(); // For programmatically navigating to different paths

//   // Simulating an API call
//   useEffect(() => {
//     const fetchTasks = async () => {
//       // Hardcoded tasks as a temporary API response
//       const hardcodedTasks = [
//         { id: 1, category: "WhatsApp", text: "Your WhatsApp task has passed.", url: "/whatsapp-automation", read: false },
//         { id: 2, category: "Email", text: "Your Email task has passed.", url: "/email-automation", read: false },
//         { id: 3, category: "LinkedIn", text: "Your LinkedIn task has passed.", url: "/linkedin-scrapping", read: false },
//         { id: 4, category: "Google Maps", text: "Your Google Maps task has passed.", url: "/google-map", read: false },
//         // Additional tasks
//         { id: 5, category: "WhatsApp", text: "You have a new message on Slack.", url: "/slack-messages", read: false },
//         { id: 6, category: "Email", text: "Your Zoom meeting starts in 10 minutes.", url: "/zoom-meeting", read: true },
//         { id: 7, category: "LinkedIn", text: "Your pull request has been approved.", url: "/github-notifications", read: false },
//         { id: 8, category: "Google Maps", text: "You have 3 tasks due today.", url: "/task-manager", read: false },
//         { id: 9, category: "WhatsApp", text: "You have a meeting scheduled for tomorrow.", url: "/calendar", read: false },
//         { id: 10, category: "Email", text: "Check your account alerts.", url: "/alerts", read: false },
//         { id: 11, category: "LinkedIn", text: "You have a meeting scheduled for tomorrow.", url: "/calendar2", read: false }, // Updated ID
//         { id: 12, category: "Google Maps", text: "Check your account alerts.", url: "/alerts2", read: false }, // Updated ID
//       ];

//       // Load tasks from local storage
//       const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

//       // Merge hardcoded tasks with stored tasks
//       const allTasks = [...hardcodedTasks, ...storedTasks];

//       setTasks(allTasks); // Set the tasks
//     };

//     fetchTasks();

//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   const formattedDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

//   // Function to filter tasks based on selected category
//   const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.category === filter);

//   // Function to handle task click and redirect to different paths
//   const handleTaskClick = (url, index) => {
//     // Mark the clicked task as read by updating its state
//     const updatedTasks = [...tasks];
//     updatedTasks[index].read = true; // Mark the specific task as read
//     setTasks(updatedTasks); // Update the state

//     // Save updated tasks to local storage
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks));

//     navigate(url); // Redirect to the specified path
//   };

//   return (
//     <Box sx={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)', padding: '2rem' }}>
//       <Container>
//         {/* Header */}
//         <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Task Activity
//             </Typography>
//           </Grid>
//         </Grid>

//         {/* Task Navigation */}
//         <Grid container spacing={2} justifyContent="space-between">
//           <Grid item xs={12}>
//             <List sx={{ display: 'flex', justifyContent: 'space-around', padding: 0, gap: '7rem', width: 'max-content', marginLeft: '1rem' }}>
//               {['All', 'WhatsApp', 'Email', 'LinkedIn', 'Google Maps'].map((label) => (
//                 <ListItem
//                   key={label}
//                   disablePadding
//                   sx={{ justifyContent: 'center', width: 'auto', cursor: 'pointer' }}
//                   onClick={() => setFilter(label)} // Set filter on click
//                 >
//                   <ListItemText
//                     sx={{ width: 'max-content' }}
//                     primary={label}
//                     primaryTypographyProps={{ variant: 'body1', sx: { fontWeight: 500, cursor: 'pointer', color: filter === label ? 'blue' : 'black' } }}
//                   />
//                 </ListItem>
//               ))}
//               <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
//                 <Button variant="outlined" color="primary" onClick={() => {
//                   const updatedTasks = tasks.map(task => ({ ...task, read: true }));
//                   setTasks(updatedTasks);
//                   localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//                 }}>
//                   Mark All as Read
//                 </Button>
//               </Grid>
//             </List>
//           </Grid>
//         </Grid>

//         {/* Tasks Section */}
//         <Box component="section" sx={{ mt: 4 }}>
//           <List sx={{ padding: 0 }}>
//             {filteredTasks.map((task, index) => (
//               <ListItem
//                 key={task.id}
//                 sx={{
//                   background: task.read ? 'transparent' : '#0088CC1A',
//                   padding: '1.5rem',
//                   borderBottom: '0.5px solid black',
//                   justifyContent: 'space-between',
//                   cursor: 'pointer'
//                 }}
//                 onClick={() => handleTaskClick(task.url, index)} // Redirect to task-specific URL
//               >
//                 <ListItemText
//                   primary={task.text} // Include index in the primary text
//                   primaryTypographyProps={{ variant: 'body1' }}
//                 />
//                 <Typography variant="body2" sx={{ marginTop: '1%' }}>
//                   {formattedDay} at {formattedTime}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Container>
//     </Box>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // For handling redirection

// export default function Tasks() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [filter, setFilter] = useState('All'); // State to track the selected filter
//   const [tasks, setTasks] = useState([]); // State to hold tasks fetched from API
//   const navigate = useNavigate(); // For programmatically navigating to different paths

//   // Simulating an API call
//   useEffect(() => {
//     const fetchTasks = async () => {
//       // Hardcoded tasks as a temporary API response
//       const hardcodedTasks = [
//         { id: 1, category: "WhatsApp", text: "Your WhatsApp task has passed.", url: "/whatsapp-automation", read: false },
//         { id: 2, category: "Email", text: "Your Email task has passed.", url: "/email-automation", read: false },
//         { id: 3, category: "LinkedIn", text: "Your LinkedIn task has passed.", url: "/linkedin-scrapping", read: false },
//         { id: 4, category: "Google Maps", text: "Your Google Maps task has passed.", url: "/google-map", read: false },
//         // // Additional tasks
//         // { id: 5, category: "WhatsApp", text: "Your WhatsApp task has passed.", url: "/slack-messages", read: false },
//         // { id: 6, category: "Email", text: "Your Zoom meeting starts in 10 minutes.", url: "/zoom-meeting", read: true },
//         // { id: 7, category: "LinkedIn", text: "Your pull request has been approved.", url: "/github-notifications", read: false },
//         // { id: 8, category: "Google Maps", text: "You have 3 tasks due today.", url: "/task-manager", read: false },
//         // { id: 9, category: "WhatsApp", text: "Your WhatsApp task has passed.", url: "/calendar", read: false },
//         // { id: 10, category: "Email", text: "Check your account alerts.", url: "/alerts", read: false },
//         // { id: 11, category: "LinkedIn", text: "You have a meeting scheduled for tomorrow.", url: "/calendar2", read: false },
//         // { id: 12, category: "Google Maps", text: "Check your account alerts.", url: "/alerts2", read: false },
//       ];

//       // Load tasks from local storage
//       const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

//       // Merge hardcoded tasks with stored tasks
//       const allTasks = [...hardcodedTasks, ...storedTasks];

//       setTasks(allTasks); // Set the tasks
//     };

//     fetchTasks();

//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   const formattedDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

//   // Function to filter tasks based on selected category
//   const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.category === filter);

//   // Function to handle task click and redirect to different paths
//   const handleTaskClick = (url, index) => {
//     // Mark the clicked task as read by updating its state
//     const updatedTasks = [...tasks];
//     updatedTasks[index].read = true; // Mark the specific task as read
//     setTasks(updatedTasks); // Update the state

//     // Save updated tasks to local storage
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks));

//     navigate(url); // Redirect to the specified path
//   };

//   return (
//     <Box sx={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)', padding: '2rem' }}>
//       <Container>
//         {/* Header */}
//         <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Task Activity
//             </Typography>
//           </Grid>
//         </Grid>

//         {/* Task Navigation */}
//         <Grid container spacing={2} justifyContent="space-between">
//           <Grid item xs={12}>
//             <List sx={{ display: 'flex', justifyContent: 'space-around', padding: 0, gap: '7rem', width: 'max-content', marginLeft: '1rem' }}>
//               {['All', 'WhatsApp', 'Email', 'LinkedIn', 'Google Maps'].map((label) => (
//                 <ListItem
//                   key={label}
//                   disablePadding
//                   sx={{ justifyContent: 'center', width: 'auto', cursor: 'pointer' }}
//                   onClick={() => setFilter(label)} // Set filter on click
//                 >
//                   <ListItemText
//                     sx={{ width: 'max-content' }}
//                     primary={label}
//                     primaryTypographyProps={{ variant: 'body1', sx: { fontWeight: 500, cursor: 'pointer', color: filter === label ? 'blue' : 'black' } }}
//                   />
//                 </ListItem>
//               ))}
//               <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
//                 <Button variant="outlined" color="primary" onClick={() => {
//                   const updatedTasks = tasks.map(task => ({ ...task, read: true }));
//                   setTasks(updatedTasks);
//                   localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//                 }}>
//                   Mark All as Read
//                 </Button>
//               </Grid>
//             </List>
//           </Grid>
//         </Grid>

//         {/* Tasks Section */}
//         <Box component="section" sx={{ mt: 4 }}>
//           <List sx={{ padding: 0 }}>
//             {filteredTasks.map((task, index) => (
//               <ListItem
//                 key={task.id}
//                 sx={{
//                   background: task.read ? 'transparent' : '#0088CC1A',
//                   padding: '1.5rem',
//                   borderBottom: '0.5px solid black',
//                   justifyContent: 'space-between',
//                   cursor: 'pointer'
//                 }}
//                 onClick={() => handleTaskClick(task.url, index)} // Redirect to task-specific URL
//               >
//                 <ListItemText
//                   primary={`${index + 1}. ${task.text}`} // Include index in the primary text
//                   primaryTypographyProps={{ variant: 'body1' }}
//                 />
//                 <Typography variant="body2" sx={{ marginTop: '1%' }}>
//                   {formattedDay} at {formattedTime}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Container>
//     </Box>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // For handling redirection

// export default function Tasks() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [filter, setFilter] = useState('All'); // State to track the selected filter
//   const [tasks, setTasks] = useState([]); // State to hold tasks fetched from API
//   const navigate = useNavigate(); // For programmatically navigating to different paths

//   // Simulating an API call
//   useEffect(() => {
//     const fetchTasks = async () => {
//       // Hardcoded tasks as a temporary API response
//       const hardcodedTasks = [
//         { id: 1, category: "WhatsApp", text: "Your WhatsApp task has passed.", url: "/whatsapp-automation", read: false },
//         { id: 2, category: "Email", text: "Your Email task has passed.", url: "/email-automation", read: false },
//         { id: 3, category: "LinkedIn", text: "Your LinkedIn task has passed.", url: "/linkedin-scrapping", read: false },
//         { id: 4, category: "Google Maps", text: "Your Google Maps task has passed.", url: "/google-map", read: false },
//         // Additional tasks
//         { id: 5, category: "WhatsApp", text: "You have a new message on Slack.", url: "/slack-messages", read: false },
//         { id: 6, category: "Email", text: "Your Zoom meeting starts in 10 minutes.", url: "/zoom-meeting", read: true },
//         { id: 7, category: "LinkedIn", text: "Your pull request has been approved.", url: "/github-notifications", read: false },
//         { id: 8, category: "Google Maps", text: "You have 3 tasks due today.", url: "/task-manager", read: false },
//         { id: 9, category: "WhatsApp", text: "You have a meeting scheduled for tomorrow.", url: "/calendar", read: false },
//         { id: 10, category: "Email", text: "Check your account alerts.", url: "/alerts", read: false },
//         { id: 11, category: "LinkedIn", text: "You have a meeting scheduled for tomorrow.", url: "/calendar2", read: false },
//         { id: 12, category: "Google Maps", text: "Check your account alerts.", url: "/alerts2", read: false },
//       ];

//       // Load tasks from local storage
//       const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

//       // Merge hardcoded tasks with stored tasks
//       const allTasks = [...hardcodedTasks, ...storedTasks];

//       setTasks(allTasks); // Set the tasks
//     };

//     fetchTasks();

//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   const formattedDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

//   // Function to filter tasks based on selected category
//   const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.category === filter);

//   // Function to handle task click and redirect to different paths
//   const handleTaskClick = (url, index) => {
//     // Mark the clicked task as read by updating its state
//     const updatedTasks = [...tasks];
//     updatedTasks[index].read = true; // Mark the specific task as read
//     setTasks(updatedTasks); // Update the state

//     // Save updated tasks to local storage
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks));

//     navigate(url); // Redirect to the specified path
//   };

//   return (
//     <Box sx={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)', padding: '2rem' }}>
//       <Container>
//         {/* Header */}
//         <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Task Activity
//             </Typography>
//           </Grid>
//         </Grid>

//         {/* Task Navigation */}
//         <Grid container spacing={2} justifyContent="space-between">
//           <Grid item xs={12}>
//             <List sx={{ display: 'flex', justifyContent: 'space-around', padding: 0, gap: '7rem', width: 'max-content', marginLeft: '1rem' }}>
//               {['All', 'WhatsApp', 'Email', 'LinkedIn', 'Google Maps'].map((label) => (
//                 <ListItem
//                   key={label}
//                   disablePadding
//                   sx={{ justifyContent: 'center', width: 'auto', cursor: 'pointer' }}
//                   onClick={() => setFilter(label)} // Set filter on click
//                 >
//                   <ListItemText
//                     sx={{ width: 'max-content' }}
//                     primary={label}
//                     primaryTypographyProps={{ variant: 'body1', sx: { fontWeight: 500, cursor: 'pointer', color: filter === label ? 'blue' : 'black' } }}
//                   />
//                 </ListItem>
//               ))}
//               <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
//                 <Button variant="outlined" color="primary" onClick={() => {
//                   const updatedTasks = tasks.map(task => ({ ...task, read: true }));
//                   setTasks(updatedTasks);
//                   localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//                 }}>
//                   Mark All as Read
//                 </Button>
//               </Grid>
//             </List>
//           </Grid>
//         </Grid>

//         {/* Tasks Section */}
//         <Box component="section" sx={{ mt: 4 }}>
//           <List sx={{ padding: 0 }}>
//             {filteredTasks.map((task, index) => (
//               <ListItem
//                 key={task.id}
//                 sx={{
//                   background: task.read ? 'transparent' : '#0088CC1A',
//                   padding: '1.5rem',
//                   borderBottom: '0.5px solid black',
//                   justifyContent: 'space-between',
//                   cursor: 'pointer'
//                 }}
//                 onClick={() => handleTaskClick(task.url, index)} // Redirect to task-specific URL
//               >
//                 <ListItemText
//                   primary={`${index + 1}. ${task.text}`} // Include index in the primary text
//                   primaryTypographyProps={{ variant: 'body1' }}
//                 />
//                 <Typography variant="body2" sx={{ marginTop: '1%' }}>
//                   {formattedDay} at {formattedTime}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // For handling redirection

// export default function Tasks() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [filter, setFilter] = useState('All'); // State to track the selected filter
//   const [tasks, setTasks] = useState([]); // State to hold tasks fetched from API
//   const navigate = useNavigate(); // For programmatically navigating to different paths

//   // Simulating an API call
//   useEffect(() => {
//     const fetchTasks = async () => {
//       // Hardcoded tasks (ensure unique tasks)
//       const hardcodedTasks = [
//         { id: 1, category: "WhatsApp", text: "Your WhatsApp task has passed.", url: "/whatsapp-automation", read: false },
//         { id: 2, category: "Email", text: "Your Email task has passed.", url: "/email-automation", read: false },
//         { id: 3, category: "LinkedIn", text: "Your LinkedIn task has passed.", url: "/linkedin-scrapping", read: false },
//         { id: 4, category: "Google Maps", text: "Your Google Maps task has passed.", url: "/google-map", read: false },
//         { id: 5, category: "WhatsApp", text: "Your WhatsApp task has passed", url: "/slack-messages", read: false },
//         { id: 6, category: "Email", text: "Your Email task has passed.", url: "/email-automation", read: false },
//         { id: 7, category: "LinkedIn", text: "Your LinkedIn task has passed.", url: "/linkedin-scrapping", read: true },
//         { id: 8, category: "Google Maps", text: "Your Google Maps task has passed.", url: "/google-map", read: true },
//         { id: 9, category: "WhatsApp", text: "Your WhatsApp task has passed", url: "/calendar", read: true },
//         { id: 10, category: "Email", text: "Your Email task has passed.", url: "/email-automation", read: true },
//         { id: 11, category: "LinkedIn", text: "Your LinkedIn task has passed.", url: "/linkedin-scrapping", read: true },
//         { id: 12, category: "Google Maps", text: "Your Google Maps task has passed.", url: "/google-map", read: true },
//       ];

//       // Load tasks from local storage
//       const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

//       // Merge hardcoded tasks with stored tasks
//       const allTasks = [...hardcodedTasks, ...storedTasks];

//       // Remove duplicates based on ID (assuming IDs are unique)
//       const uniqueTasks = Array.from(new Map(allTasks.map(task => [task.id, task])).values());

//       setTasks(uniqueTasks); // Set the tasks
//     };

//     fetchTasks();

//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   const formattedDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

//   // Function to filter tasks based on selected category
//   const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.category === filter);

//   // Function to handle task click and redirect to different paths
//   const handleTaskClick = (url, index) => {
//     // Mark the clicked task as read by updating its state
//     const updatedTasks = [...tasks];
//     updatedTasks[index].read = true; // Mark the specific task as read
//     setTasks(updatedTasks); // Update the state

//     // Save updated tasks to local storage
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks));

//     navigate(url); // Redirect to the specified path
//   };

//   return (
//     <Box sx={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)', padding: '2rem' }}>
//       <Container>
//         {/* Header */}
//         <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Task Activity
//             </Typography>
//           </Grid>
//         </Grid>

//         {/* Task Navigation */}
//         <Grid container spacing={2} justifyContent="space-between">
//           <Grid item xs={12}>
//             <List sx={{ display: 'flex', justifyContent: 'space-around', padding: 0, gap: '7rem', width: 'max-content', marginLeft: '1rem' }}>
//               {['All', 'WhatsApp', 'Email', 'LinkedIn', 'Google Maps'].map((label) => (
//                 <ListItem
//                   key={label}
//                   disablePadding
//                   sx={{ justifyContent: 'center', width: 'auto', cursor: 'pointer' }}
//                   onClick={() => setFilter(label)} // Set filter on click
//                 >
//                   <ListItemText
//                     sx={{
//                       width: 'max-content'
//                     }}
//                     primary={label}
//                     primaryTypographyProps={{
//                       variant: 'body1', sx: {
//                         fontWeight: 500, cursor: 'pointer', color: filter === label ? 'blue' : 'black', '&:hover': {
//                           color: 'blue'
//                         }
//                       }
//                     }}
//                   />
//                 </ListItem>
//               ))}
//               <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
//                 <Button variant="outlined" color="primary" onClick={() => {
//                   const updatedTasks = tasks.map(task => ({ ...task, read: true }));
//                   setTasks(updatedTasks);
//                   localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//                 }}>
//                   Mark All as Read
//                 </Button>
//               </Grid>
//             </List>
//           </Grid>
//         </Grid>

//         {/* Tasks Section */}
//         <Box component="section" sx={{ mt: 4 }}>
//           <List sx={{ padding: 0 }}>
//             {filteredTasks.map((task, index) => (
//               <ListItem
//                 key={task.id}
//                 sx={{
//                   background: task.read ? 'transparent' : '#0088CC1A',
//                   padding: '1.5rem',
//                   borderBottom: '0.5px solid black',
//                   justifyContent: 'space-between',
//                   cursor: 'pointer',
//                   '&:hover': {
//                     background: task.read ? '#D9D9D94D' : '#0AA2EE33'
//                   }
//                 }}
//                 onClick={() => handleTaskClick(task.url, index)} // Redirect to task-specific URL
//               >
//                 <ListItemText
//                   primary={task.text} // Include index in the primary text
//                   primaryTypographyProps={{ variant: 'body1' }}
//                 />
//                 <Typography variant="body2" sx={{ marginTop: '1%' }}>
//                   {formattedDay} at {formattedTime}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Container>
//     </Box>
//   );
// }