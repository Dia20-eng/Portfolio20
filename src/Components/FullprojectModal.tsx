import { Badge, Indicator, Image, Modal, Group,Text, Button, ScrollArea } from "@mantine/core";

const FullprojectModal=(props:any)=>{
    return<>
    <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="70%"   className="font-mono"  opened={ props.opened} onClose={ props.close}>
        <Modal.Overlay />
        <Modal.Content className="!rounded-3xl">
          <Modal.Header className="!bg-bgcolor !border-primarycolor !border-2 !border-b-0  !rounded-tl-3xl !rounded-tr-3xl">
            <Modal.Title data-autofocus className="!text-3xl text-white  flex items-center gap-4 font-bold">{props.title}{props.live===true &&
        <Badge size="lg"  className="!text-xs flex items-center gap-1 !font-bold " variant="outline" color="red" rightSection={<Indicator color="red" position="middle-end" size={7} processing></Indicator>}>Live </Badge>}</Modal.Title>
            <Modal.CloseButton  size="md" iconSize="30px" className="!bg-bgcolor !text-primarycolor"/>
          </Modal.Header>
          <Modal.Body className="!bg-bgcolor !pt-2 !border-primarycolor !border-2 !border-t-0  !rounded-bl-3xl !rounded-br-3xl">
          <Image 
           className="!rounded-xl  !shadow-[0_0_6px_0_#64FFDA]"
           src={props.image}
           alt={props.image}
          />
        <Text  className="text-justify !text-md  !text-primarycolor   !pt-6"  size="sm" c="dimmed"> 
          {props.desc}
        </Text>
        <Group mt="md" justify="space-between">
        <a href={props.github} target="_blank" className="!w-[48%]"><Button  variant="light"   color="#64FFDA" fullWidth mt="md" radius="md">
       View Code
      </Button>
      </a>
      <a  href={props.link} target="_blank" className="!w-[48%]">
      <Button variant="light" color="#64FFDA" fullWidth mt="md" radius="md">
       View Live App
      </Button>
      </a>

        </Group>
    

          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>

}
export default FullprojectModal;
