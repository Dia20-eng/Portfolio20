import { Badge,  Indicator,Button, Card, Group,Image, Text } from "@mantine/core"
import FullprojectModal from "./FullprojectModal";
import { useDisclosure } from "@mantine/hooks";

const Projectcard=( props:any)=>{
    const [opened, { open, close }] = useDisclosure(false);
    return<div data-aos="fade-up"
    data-aos-duration="3000">
        <Card onClick={open} className="!bg-bgcolor mb-5 transition-transform duration-200 ease-in-out cursor-pointer hover:!scale-[1.03] hover:!shadow-[0_0_10px_1px_#64FFDA] !border-primarycolor" w="360px" shadow="m" padding="sm" radius="lg" withBorder>
      <Card.Section>
        <Image className="p-2 !shadow-[0_0_6px_0_#64FFDA]" 
          src={props.image}
        
          alt={props.image}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text className="!text-xl gap-1 !text-white font-mono flex-center !font-bold ">{props.title} </Text>{props.live===true &&
        <Badge className="!text-xs" variant="outline" color="red" rightSection={<Indicator color="red" position="middle-end" size={7} processing></Indicator>}>Live </Badge>}
      </Group>
      {/* <Group  justify="space-between" mt="xs"  m="xs" className="">
        {props.technologies.map((tech:string, index:number)=><Badge variant="light" color="red">{tech}</Badge>)} */}

      {/* </Group> */}
    
        

      <Text  className="text-justify !text-l" lineClamp={5} size="sm" c="dimmed">
        {props.desc}
      </Text>

      <Button onClick={open} className="!bg-primarycolor !text-bgcolor" color="blue" fullWidth mt="md" radius="md">
       Show More
      </Button>
    </Card>
    <FullprojectModal opened={opened} close={close} title={props.title} image={props.image} desc={props.desc} live={props.live} link={props.link} github={props.github}/>
    </div>
    
    
}
export default Projectcard;