import { Badge, Button, Group, Modal, ScrollArea,Image,Text, ActionIcon, Tooltip } from "@mantine/core";
import { IconArrowBarToDown } from "@tabler/icons-react";
import {Document,Page} from "react-pdf";


const ResumeView = (props:any) => {
   return <div>
      <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="auto" className="font-mono" opened={props.opened} onClose={props.close}>
         <Modal.Overlay />
         <Modal.Content className="!rounded-3xl">
            <Modal.Header className="!bg-bgcolor !border-primarycolor !border-2 !border-b-0  !rounded-tl-3xl !rounded-tr-3xl">
               <Modal.Title data-autofocus className="!text-3xl text-white  flex items-center gap-4 font-bold">Resume
               <Tooltip label="Download" className="text-bgcolor" color="#64FFDA" position="right" offset={5}>
                  <ActionIcon className="text-bgcolor" component="a" href="/DiaResume.pdf" download={"DiaJain"} variant="outline" color="#64FFDA" aria-label="Settings">
                     <IconArrowBarToDown />
                  </ActionIcon>
                  </Tooltip>
               </Modal.Title>
               <Modal.CloseButton size="md" iconSize="30px" className="!bg-bgcolor !text-primarycolor" />
            </Modal.Header>
            <Modal.Body className="!bg-bgcolor !pt-2 !border-primarycolor !border-2 !border-t-0  !rounded-bl-3xl !rounded-br-3xl">
               <Document file="/DiaResume.pdf">
                  <Page pageNumber={1} renderTextLayer={false} />
               </Document>

            </Modal.Body>
         </Modal.Content>
      </Modal.Root>


   </div>
}
export default ResumeView;