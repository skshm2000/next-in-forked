import { Avatar, Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Icon, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import { BiStopwatch } from "react-icons/bi";
import { BsArrowRight, BsPlusLg } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";
 
const taskData = [{
    title:"Do Redux",
    status: "todo",
    deadline: "23-12-2022",
    assignee: "Rai Ganatra"
},{
    title:"Do Redux",
    status: "inprogress",
    deadline: "23-12-2022",
    assignee: "Aman Ojha"
},{
    title:"Do Redux all day",
    status: "done",
    deadline: "23-12-2022",
    assignee: "Yash Sutar"
},{
    title:"Do Redux",
    status: "todo",
    deadline: "23-12-2022",
    assignee: "Zohn Moe"
}]

const Tasks = () => {
    return (
        <Tabs isFitted variant="enclosed" w={{base:"100vw",md:"80vw",xl:"60vw"}} gap="30px" minH={"100vh"} m="20px auto">
            <TabList w="100%" >
                <Tab _selected={{ bg:"#4486F6", color:"white"}} fontWeight="600">Project Tasks</Tab>
                <Tab _selected={{bg:"#F5B544", color:"black"}} fontWeight="600">Personal Tasks</Tab>
            </TabList>
            <TabPanels>
                <TabPanel><ProjectTasks/></TabPanel>
                <TabPanel><PersonalTasks/></TabPanel>
            </TabPanels>
        </Tabs>
    )
}


const ProjectTasks = () => {
    return (
        <>
            <Flex className="ProjectTasks" flexDirection={"column"} w="100%" minH={"80%"} >
                {/* <Box display="flex" flexDirection={"row"} justifyContent={"flex-end"} m="10px" mb="20px">
                    <Heading size="md">Project Tasks</Heading>
                    <Button rightIcon={<BsPlusLg />} colorScheme='blue' variant='solid'>
                        Add Task
                    </Button>
                </Box> */}
                <TaskContent/>
            </Flex>
        </>
    )
}

const PersonalTasks = () =>{
    return (
        <>
            <Flex className="PersonalTasks" flexDirection={"column"} minH={"50%"}>
                <Box display="flex" flexDirection={"row"} justifyContent={"flex-end"} >
                    {/* <Heading>My Personal Tasks</Heading> */}
                    <Button rightIcon={<BsPlusLg />} bg='#F5B544' variant='solid' m="10px" mb="20px">
                        Add Task
                    </Button>
                </Box>
                <TaskContent/>
            </Flex>
        </>
    )
}

const TaskContent = () => {
    return (
        <>
            <Flex className="taskContent" flexDirection={{base:"column", lg:"row"}}  w="100%" gap="10px">
                <Flex flexDirection={"column"} gap="5px" w="100%">
                    <Heading size="md" color={"#4F5E7B"} fontWeight="500">To Do</Heading>
                    <VStack w="100%" minH="480px" p="15px" bg="#F7F7F7" borderRadius={"10px"}>
                        {taskData.map((task,i)=>{
                            if(task.status==="todo"){
                                return <TaskCard key={i} data={task}/>
                            }
                        } )}
                    </VStack>
                </Flex>
                <Flex flexDirection={"column"} gap="5px" w="100%">
                    <Heading size="md" color={"#4F5E7B"} fontWeight="500">In Progress</Heading>
                    <VStack w="100%" minH="480px" p="15px" bg="#F7F7F7" borderRadius={"10px"}>
                        {taskData.map((task,i)=>{
                            if(task.status==="inprogress"){
                                return <TaskCard key={i} data={task}/>
                            }
                        } )}
                    </VStack>
                </Flex>
                <Flex flexDirection={"column"} gap="5px" w="100%" >
                    <Heading size="md" color={"#4F5E7B"} fontWeight="500">Completed</Heading>
                    <VStack w="100%" gap="20px" bg="#F7F7F7" minH="480px" p="15px" borderRadius={"10px"}>
                        {taskData.map((task,i)=>{
                            if(task.status==="done"){
                                return <TaskCard key={i} data={task}/>
                            }
                        } )}
                    </VStack>
                </Flex>
            </Flex>
        </>
    )
}

const TaskCard = ({data}) => {
    
return (
    <>
        <Card bg="white" minW={{base:"90%",lg:"90%","2xl":"90%"}} minH="100px" p="10px">
            <CardBody p="0px">
                <Flex gap="10px" alignItems={"flex-start"} justifyContent="space-between">
                    <Flex gap="10px">
                        <Avatar size="sm" name={data.assignee} />
                        <Box dislay="flex" justifyContent={"flex-start"}>
                            <Text fontWeight="600" fontSize="1em">{data.title}</Text>
                            <Text>{data.assignee}</Text>
                        </Box>
                    </Flex>
                    <Box borderRadius={"20px"} variant="ghost" p="0px"><Icon as={FiEdit2} color="blue"/></Box>
                </Flex>
            </CardBody>
            <CardFooter p="5px" display="flex" justifyContent={"space-between"} alignItems="center">
                <Box display="flex" flexDirection={"row"} gap="3px">
                    <Icon as={BiStopwatch} cursor="pointer" bg={"transparent"} w="20px" height="20px" color="red.600"/>
                    <Text fontSize={"0.8em"}>{data.deadline}</Text>
                </Box>
                <Button bg="#29B3FE" size="sm" >{data.status != "done" ? <Icon as={AiOutlineArrowRight} size={"12px"} color="white"/>: <Icon as={IoMdDoneAll}size={"12px"} color="white"/>}</Button>
            </CardFooter>
        </Card>
    </>
)


}

export default Tasks;

