// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// export default function Tasks() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [filter, setFilter] = useState('All');
//   const [tasks, setTasks] = useState([]);
//   const navigate = useNavigate();

//   // const fetchTasks = async () => {
//   //   try {
//   //     // Fetch email task data
//   //     const emailResponse = await axios.get('http://salesnexa.indenta.ai:8000/api/automation/email-automation/details/', {
//   //       headers: {
//   //         Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming your token is saved in local storage
//   //       }
//   //     });

//   //     console.log("Email Response:", emailResponse.data); // Log the response to the console
//   //     const emailData = emailResponse.data.details; // Adjust according to your actual API response structure

//   //     // Construct tasks from email data
//   //     const fetchedTasks = emailData.map((emailId) => ({
//   //       id: emailId, // Assuming each email ID can be a unique identifier
//   //       category: "Email",
//   //       text: "Your Email Automation Task has been completed successfully. Click here to view the results.", // Use the email ID or other details
//   //       url: "/email-automation",
//   //       read: false,
//   //     }));

//   //     setTasks(fetchedTasks); // Update tasks with fetched tasks

//   //   } catch (error) {
//   //     console.error("Error fetching tasks", error);
//   //   }
//   // };

//   // const fetchTasks = async () => {
//   //   try {
//   //     // Fetch email task data
//   //     const emailResponse = await axios.get('http://salesnexa.indenta.ai:8000/api/automation/email-automation/details/', {
//   //       headers: {
//   //         Authorization: `Bearer ${localStorage.getItem("token")}`,
//   //       }
//   //     });

//   //     console.log("Email Response:", emailResponse.data);
//   //     const emailData = emailResponse.data.details;

//   //     const emailTasks = emailData.map((emailId) => ({
//   //       id: emailId,
//   //       category: "Email",
//   //       text: "Your Email Automation Task has been completed successfully. Click here to view the results.",
//   //       url: "/email-automation",
//   //       read: false,
//   //     }));

//   //     // Fetch LinkedIn task data
//   //     const linkedInResponse = await axios.get('http://salesnexa.indenta.ai:8000/api/scraper/linkedin-scraper/csv-file/', {
//   //       headers: {
//   //         Authorization: `Bearer ${localStorage.getItem("token")}`,
//   //       }
//   //     });

//   //     console.log("LinkedIn Response:", linkedInResponse.data);
//   //     const linkedInData = linkedInResponse.data.response; // Adjust according to actual API structure

//   //     const linkedInTasks = linkedInData.map((task, index) => ({
//   //       id: `linkedin-${index}`,
//   //       category: "LinkedIn",
//   //       text: `Your LinkedIn scraping task is completed. Download the CSV file here.`,
//   //       url: "/linkedin-scraper",
//   //       read: false,
//   //     }));

//   //     // Combine email and LinkedIn tasks
//   //     const allTasks = [...emailTasks, ...linkedInTasks];
//   //     setTasks(allTasks);

//   //   } catch (error) {
//   //     console.error("Error fetching tasks", error);
//   //   }
//   // };
//   const fetchTasks = async () => {
//     try {
//       // Fetch email task data
//       const emailResponse = await axios.get('http://salesnexa.indenta.ai:8000/api/automation/email-automation/details/', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         }
//       });

//       console.log("Email Response:", emailResponse.data);
//       const emailData = emailResponse.data.details;

//       const emailTasks = emailData.map((emailId) => ({
//         id: emailId,
//         category: "Email",
//         text: "Your Email Automation Task has been completed successfully. Click here to view the results.",
//         url: "/email-automation",
//         read: false,
//         timestamp: new Date(), // Add a timestamp
//       }));

//       // Fetch LinkedIn task data
//       const linkedInResponse = await axios.get('http://salesnexa.indenta.ai:8000/api/scraper/linkedin-scraper/csv-file/', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         }
//       });

//       console.log("LinkedIn Response:", linkedInResponse.data);
//       const linkedInData = linkedInResponse.data.response;

//       const linkedInTasks = linkedInData.map((task, index) => ({
//         id: `linkedin-${index}`,
//         category: "LinkedIn",
//         text: `Your LinkedIn scraping task is completed. Download the CSV file here.`,
//         url: "/linkedin-scraper",
//         read: false,
//         timestamp: new Date(), // Add a timestamp
//       }));

//       // Combine email and LinkedIn tasks
//       const allTasks = [...emailTasks, ...linkedInTasks];

//       // Sort tasks by timestamp (most recent first)
//       allTasks.sort((a, b) => b.timestamp - a.timestamp);

//       setTasks(allTasks);

//     } catch (error) {
//       console.error("Error fetching tasks", error);
//     }
//   };
//   useEffect(() => {
//     fetchTasks();

//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   const formattedDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

//   // const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.category === filter);
//   const filteredTasks = tasks.filter(task => task.category === filter);

//   const handleTaskClick = (url, index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].read = true;
//     setTasks(updatedTasks);
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks));

//     Swal.fire({
//       title: 'Task Completed',
//       text: tasks[index].text,
//       icon: 'success',
//       showCancelButton: true,
//       confirmButtonText: 'New Task',
//       cancelButtonText: 'Close',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         navigate('/email-automation');
//       }
//     });
//   };

//   return (
//     <Box sx={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)', padding: { xs: '1rem', sm: '2rem' } }}>
//       <Container>
//         <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Task Activity
//             </Typography>
//           </Grid>
//         </Grid>

//         <Grid container spacing={2} justifyContent="space-between">
//           <Grid item xs={12}>
//             <List
//               sx={{
//                 display: 'flex',
//                 justifyContent: { xs: 'space-around', sm: 'flex-start' },
//                 flexWrap: 'wrap',
//                 padding: 0,
//                 gap: { xs: '1rem', sm: '2rem', md: '3rem' },
//               }}
//             >
//               {['Email', 'LinkedIn' , 'Google Maps' , 'WhatsApp'].map((label) => (
//                 <ListItem
//                   key={label}
//                   disablePadding
//                   sx={{
//                     justifyContent: 'center',
//                     width: 'auto',
//                     cursor: 'pointer',
//                   }}
//                   onClick={() => setFilter(label)}
//                 >
//                   <ListItemText
//                     sx={{
//                       width: 'max-content',
//                     }}
//                     primary={label}
//                     primaryTypographyProps={{
//                       variant: 'body1',
//                       sx: {
//                         fontWeight: 500,
//                         cursor: 'pointer',
//                         color: filter === label ? 'blue' : 'black',
//                         '&:hover': {
//                           color: 'blue',
//                         },
//                       },
//                     }}
//                   />
//                 </ListItem>
//               ))}
//               {/* <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' }, mt: { xs: 2, sm: 0 } }}> */}
//               <Grid item xs={12} sm={6} sx={{marginLeft : 'auto', textAlign: { xs: 'center', sm: 'right' }, mt: { xs: 2, sm: 0 } }}>
//                 <List>
//                   <ListItem>
//                     <Button
//                     sx={{marginLeft : 'auto'}}
//                       variant="outlined"
//                       color="primary"
//                       onClick={() => {
//                         const updatedTasks = tasks.map((task) => ({ ...task, read: true }));
//                         setTasks(updatedTasks);
//                         localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//                       }}
//                     >
//                       Mark All as Read
//                     </Button>
//                   </ListItem>
//                 </List>
//               </Grid>
//             </List>
//           </Grid>
//         </Grid>

//         <Box component="section" sx={{ mt: 4 }}>
//           <List sx={{ padding: 0 }}>
//             {filteredTasks.map((task, index) => (
//               <ListItem
//                 key={task.id}
//                 sx={{
//                   background: task.read ? 'transparent' : '#0088CC1A',
//                   padding: { xs: '1rem', sm: '1.5rem' },
//                   borderBottom: '0.5px solid black',
//                   justifyContent: 'space-between',
//                   cursor: 'pointer',
//                   '&:hover': {
//                     background: task.read ? '#D9D9D94D' : '#0AA2EE33',
//                   },
//                 }}
//                 onClick={() => handleTaskClick(task.url, index)}
//               >
//                 <ListItemText
//                   primary={task.text}
//                   primaryTypographyProps={{ variant: 'body1' }}
//                 />
//                 <Typography variant="body2" sx={{ marginTop: { xs: '0.5rem', sm: '1%' } }}>
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
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Tasks() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [filter, setFilter] = useState('Email'); // Start with Email as the default filter
  const [emailTasks, setEmailTasks] = useState([]); // Separate state for email tasks
  const [otherTasks, setOtherTasks] = useState([]); // State for LinkedIn, WhatsApp, Google Maps
  const navigate = useNavigate();

  const fetchEmailTasks = async () => {
    try {
      const emailResponse = await axios.get('http://salesnexa.indenta.ai:8000/api/automation/email-automation/details/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
      const emailData = emailResponse.data.details;
      const fetchedEmailTasks = emailData.map((emailId) => ({
        id: emailId,
        category: "Email",
        text: "Your Email Automation Task has been completed successfully. Click here to view the results.",
        url: "/email-automation",
        read: false,
        timestamp: new Date(),
      }));
      setEmailTasks(fetchedEmailTasks);
    } catch (error) {
      console.error("Error fetching email tasks", error);
    }
  };

  const fetchOtherTasks = async (category) => {
    try {
      let otherResponse;
      switch (category) {
        case 'LinkedIn':
          otherResponse = await axios.get('http://salesnexa.indenta.ai:8000/api/scraper/linkedin-scraper/csv-file/', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
          });
          const linkedInData = otherResponse.data.response;
          const fetchedLinkedInTasks = linkedInData.map((task, index) => ({
            id: `linkedin-${index}`,
            category: "LinkedIn",
            text: "Your LinkedIn scraping task is completed. Download the CSV file here.",
            url: "/linkedin-scraper",
            read: false,
            timestamp: new Date(),
          }));
          setOtherTasks(fetchedLinkedInTasks);
          break;

        // Add more cases for WhatsApp and Google Maps as needed
        case 'WhatsApp':
          // Fetch WhatsApp tasks
          break;

        case 'Google Maps':
          // Fetch Google Maps tasks
          break;

        default:
          break;
      }
    } catch (error) {
      console.error(`Error fetching ${category} tasks`, error);
    }
  };

  useEffect(() => {
    fetchEmailTasks(); // Fetch email tasks once on mount

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTaskClick = (url, index) => {
    const tasks = filter === 'Email' ? emailTasks : otherTasks;
    const updatedTasks = [...tasks];
    updatedTasks[index].read = true;
    if (filter === 'Email') {
      setEmailTasks(updatedTasks);
    } else {
      setOtherTasks(updatedTasks);
    }
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    Swal.fire({
      title: 'Task Completed',
      text: tasks[index].text,
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'New Task',
      cancelButtonText: 'Close',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(url);
      }
    });
  };

  const handleFilterChange = (category) => {
    setFilter(category);
    fetchOtherTasks(category); // Fetch tasks for the selected category
  };

  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

  const tasksToDisplay = filter === 'Email' ? emailTasks : otherTasks;

  return (
    <Box sx={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)', padding: { xs: '1rem', sm: '2rem' } }}>
      <Container>
        <Grid container spacing={2} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" component="h1" gutterBottom>
              Task Activity
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12}>
            <List
              sx={{
                display: 'flex',
                justifyContent: { xs: 'space-around', sm: 'flex-start' },
                flexWrap: 'wrap',
                padding: 0,
                gap: { xs: '1rem', sm: '2rem', md: '3rem' },
              }}
            >
              {['Email', 'LinkedIn', 'WhatsApp', 'Google Maps'].map((label) => (
                <ListItem
                  key={label}
                  disablePadding
                  sx={{
                    justifyContent: 'center',
                    width: 'auto',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleFilterChange(label)}
                >
                  <ListItemText
                    sx={{
                      width: 'max-content',
                    }}
                    primary={label}
                    primaryTypographyProps={{
                      variant: 'body1',
                      sx: {
                        fontWeight: 500,
                        cursor: 'pointer',
                        color: filter === label ? 'blue' : 'black',
                        '&:hover': {
                          color: 'blue',
                        },
                      },
                    }}
                  />
                </ListItem>
              ))}
              <Grid item xs={12} sm={6} sx={{ marginLeft: 'auto', textAlign: { xs: 'center', sm: 'right' }, mt: { xs: 2, sm: 0 } }}>
                <List>
                  <ListItem>
                    <Button
                      sx={{ marginLeft: 'auto' }}
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        const updatedTasks = tasksToDisplay.map((task) => ({ ...task, read: true }));
                        if (filter === 'Email') {
                          setEmailTasks(updatedTasks);
                        } else {
                          setOtherTasks(updatedTasks);
                        }
                        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
                      }}
                    >
                      Mark All as Read
                    </Button>
                  </ListItem>
                </List>
              </Grid>
            </List>
          </Grid>
        </Grid>

        <Box component="section" sx={{ mt: 4 }}>
          <List sx={{ padding: 0 }}>
            {tasksToDisplay.map((task, index) => (
              <ListItem
                key={task.id}
                sx={{
                  background: task.read ? 'transparent' : '#0088CC1A',
                  padding: { xs: '1rem', sm: '1.5rem' },
                  borderBottom: '0.5px solid black',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  '&:hover': {
                    background: task.read ? '#D9D9D94D' : '#0AA2EE33',
                  },
                }}
                onClick={() => handleTaskClick(task.url, index)}
              >
                <ListItemText
                  primary={task.text}
                  primaryTypographyProps={{ variant: 'body1' }}
                />
                <Typography variant="body2" sx={{ marginTop: { xs: '0.5rem', sm: '1%' } }}>
                  {formattedDay} at {formattedTime}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
}
