import * as React from 'react';
import { SyntheticEvent, useContext, useEffect, useRef, useState } from 'react';
import { Tab, Tabs, Box, Typography, Snackbar, Alert, TextField, AppBar, Autocomplete } from '@mui/material';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import { HexColorPicker } from "react-colorful";
import { TabPanel } from '../ui';
import { CustomMenuLayout } from '../../layouts';
import { BuildContext } from '../../context';
import style from './custommenu.module.css'
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import FilterListIcon from '@mui/icons-material/FilterList';
import ImageIcon from '@mui/icons-material/Image';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { uploadImg } from '../../apis/authApi';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { TabPanelChangeLabel } from '../ui/TabPanelChangeLabel';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import 'animate.css';
import { ShadowPicker } from 'react-shadow-picker';

const PrettoSlider = styled(Slider)({
  color: 'linear-gradient(30deg, rgba(121,82,119,0.975) 30%, #355192 85%)',
  height: 8,
  marginTop:40,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#355192',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#355192',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});
const optionsItems = [{
  label:'item-1'
},
{
  label:'item-2'
 },
{
  label:'item-3'
    },]
const options = [{
  label:'Raleway'
},
{label:'Lora'},
{label:'Mukta'},
{label:'Oswald'},
{label:'Nunito'},
{label:'Roboto'},
{label:'Oswald'},
{label:'Rubik'},
{label:'League Gothic'},
{label:'Kdam Thmor Pro'},
{label:'Comic Neue'},]

export const CustomMenu = () => {
  const [value, setValue] = useState<number>(0);
  const [color, setColor] = useState("#121212");
  const [heigth, setHeigth] = useState(5);
  const {active,addComponent,changeColorPage,activeComponent, updateActiveComponent,deletedComponent,addUrlImage ,updateLabelText,updateActiveItemList}  =  useContext(BuildContext);

  const [width, setWidth] = useState(5);
  const [colors, setColors] = useState("#121212");
  const [size, setSize] = useState(5);
  const [changeLabel, setChangeLabel] = useState(5);
  const [background, setbackground] = useState("#121212");
  const [radius, setradius] = useState(5);

  const [open, setOpen] = useState(false);
  const [labelOpen, setOpenErrorLabel] = useState(false);
  const [itemOpen, setOpenErrorItem] = useState(false);
  const [itemChangeOpen, setOpenErrorChangeItem] = useState(false);
  const [label, setInputField] = useState('');
  const [labelItem, setInputFieldItem] = useState('');
  const [itemOption, setItem] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [backgroundBorder, setbackgroundBorder] = useState("#121212");
  const [left, setLeft] = useState(5);
  const [right, setRight] = useState(5);
  const [top, setTop] = useState(5);
  const [bottom, setBottom] = useState(5);
  const [shadow, setShadow] = useState("0px 0px 10px 10px #44444455");
  const theme = useTheme();
  console.log(active)


  useEffect(() => {
    setActiveComponent(active)
  }, [active])

  const [activeModify, setActiveComponent] = useState(active);

  useEffect(() => {
    updateActiveComponent(activeModify)
    
  }, [activeModify])
  useEffect(() => {
    updateActiveItemList(activeModify)
  }, [activeModify])
  useEffect(() => {
    setInputFieldItem(labelItem)
  }, [labelItem])
  
  
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
    setOpen(false);
    setOpenErrorLabel(false);
    setOpenErrorItem(false);
    setOpenErrorChangeItem(false);
  };

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const   handleClickDelete = (id:string ) => {
    deletedComponent(id);
  }


  const handleItemChange = (e:any) => {

    if(active.type === ''){
      setOpenErrorLabel(true);
      return;
    }else if (active.type === 'list'){
     setItem(e.target.textContent)

    }else{



    }
    
  }


  const handleModifyItemValue= (event:any ) => {
    if(active.type === ''){
      setOpenErrorLabel(true);
      return;
    }else if(active.type === 'list'){

      if(itemOption != ''){
        setInputFieldItem(event.target.value)
        // updateActiveItemList(itemOption,active.id,labelItem);
        let indexItem = 0;
        if(itemOption === 'item-1'){
          indexItem = 0;
        }else if(itemOption === 'item-2'){
  
          indexItem = 1;
        }else{
          indexItem = 2;
        }
        setActiveComponent((state:any) => ({
                                
          ...state,    
          items: state.items.map((i:string,index:any) => {
            
            if(index === indexItem ){
              return labelItem;
            }
            return i;
          })  
      
    }));
    console.log(JSON.stringify(activeModify) + 'este es el active modify')
    updateActiveItemList(activeModify);
  


      }else{
        setOpenErrorChangeItem(true)

        return;
      }
    



    }else{

      setOpenErrorItem(true);
      return;
    }
  }


  const handleModifyLabel = (event:any ) => {
    if(active.type === ''){
      setOpenErrorLabel(true);
      return;
    }else{
      setInputField(event.target.value)
      updateLabelText(label , active.id);
    }
  }
  const handleFontFamilyChange = (e:any) => {
   
      if(active.type === ''){
        setOpenErrorLabel(true);
        return;
      }else{
              setActiveComponent((state:any) => ({
                              
                ...state,    
                sx: {
                  ...state.sx,
                  fontFamily:e.target.textContent
                }      
            
          }));
          updateActiveComponent(activeModify);
      }

  }

  const onFileInputChange = async({target}:any) => {
    const response = await uploadImg(target.files[0]);
    if(active.type === 'image'){
      addUrlImage(response.secure_url,active.id);
    }
  }

  const handleChangeColor = (value:string ) => {
    setColor(value)
    changeColorPage(value);
  }

  const handleChangeBoxShadow = (value:any) => {

    setShadow(value);
    console.log(value)
    if(active.type === ''){
      setOpenErrorLabel(true);
      return;
    }else{
          setActiveComponent((state:any) => ({       
                ...state,    
                sx: {
                  ...state.sx,
                  boxShadow: value
                }      
          }));

  }
    updateActiveComponent(activeModify);
  }
  const handleChangeHeigth = (event:any ) => {
    setHeigth(event.target.value)
    if(active.type === ''){
      setOpenErrorLabel(true);
      return;
    }else{
            setActiveComponent((state:any) => ({
                            
              ...state,    
              sx: {
                ...state.sx,
                height: event.target.value
              }      
          
        }));
        updateActiveComponent(activeModify);
    }
  }

  const handleChangeWidth = (event:any ) => {
    setWidth(event.target.value)
    if(active.type === ''){
      setOpenErrorLabel(true);
      return;
    }else{
          setActiveComponent((state:any) => ({       
                ...state,    
                sx: {
                  ...state.sx,
                  width: event.target.value+"%"
                }      
          }));

  }
    updateActiveComponent(activeModify);
  }

  const handleColor = (value:any ) => {
    setColors(value)
    if(active.type === ''){
      setOpenErrorLabel(true);
      return;
    }else{
    setActiveComponent((state:any) => ({       
          ...state,    
          sx: {
            ...state.sx,
            color: value
          }      
    }));

  }
    updateActiveComponent(activeModify);
  }

  const handleBackground = (value:any ) => {
    setbackground(value)
    if(active.type === ''){
      setOpenErrorLabel(true);
      return;
    }else{
    setActiveComponent((state:any) => ({       
          ...state,    
          sx: {
            ...state.sx,
            background: value
          }      
    }));

  }
    updateActiveComponent(activeModify);
  }

  const handleChangeSize = (event:any ) => {
    setSize(event.target.value)
    if(active.type === ''){
      setOpenErrorLabel(true);
      return;
    }else{
    setActiveComponent((state:any) => ({       
          ...state,    
          sx: {
            ...state.sx,
            fontSize: event.target.value
          }      
    }));

  }
    updateActiveComponent(activeModify);
  }

  const handleChangeRadius = (event:any ) => {
    setradius(event.target.value)
    if(active.type === ''){
      setOpenErrorLabel(true);
      return;
    }else{
    setActiveComponent((state:any) => ({       
          ...state,    
          sx: {
            ...state.sx,
            borderRadius: event.target.value
          }      
    }));

  }
    updateActiveComponent(activeModify);
  }

 
  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const [alignment, setAlignment] = useState<string | null>('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
    setActiveComponent((state:any) => ({       
      ...state,    
      sx: {
        ...state.sx,
        textAlign: newAlignment
      }      
    }));
    updateActiveComponent(activeModify);
  };


  const [checked, setChecked] = React.useState(true);

  const handleChangeRadio = (event:any ) => {
    setChecked(event.target.checked);
    if(event.target.checked==true){  
      setActiveComponent((state:any) => ({       
            ...state,    
            sx: {
              ...state.sx,
              listStyle: ''
            }      
      }));
    }else{
      setActiveComponent((state:any) => ({       
        ...state,    
        sx: {
          ...state.sx,
          listStyle: 'none'
        }      
  }));
    }
    updateActiveComponent(activeModify);
  }

  const [checkedBorder, setCheckedBorder] = React.useState(true);

  const handleChangeBorder = (event:any ) => {
    setCheckedBorder(event.target.checked);
    if(event.target.checked==true){  
      setActiveComponent((state:any) => ({       
            ...state,    
            sx: {
              ...state.sx,
              border: '1px solid red'
            }      
      }));
    }else{
      setActiveComponent((state:any) => ({       
        ...state,    
        sx: {
          ...state.sx,
          border: 0
        }      
  }));
    }
    updateActiveComponent(activeModify);
  }

  const handleBackgroundBorder = (value:any ) => {
    setbackgroundBorder(value)
    if(active.type === ''){
      setOpenErrorLabel(true);
      return;
    }else{
    setActiveComponent((state:any) => ({       
          ...state,    
          sx: {
            ...state.sx,
            border: '1px solid'+value
          }      
    }));

  }
    updateActiveComponent(activeModify);
  }

  const handleChangePaddingLeft = (event:any ) => {
    setLeft(event.target.value)
    if(active.type === ''){
      setOpenErrorLabel(true);
      return;
    }else{
    setActiveComponent((state:any) => ({       
          ...state,    
          sx: {
            ...state.sx,
            paddingLeft: event.target.value
          }      
    }));

  }
    updateActiveComponent(activeModify);
  }
  const handleChangePaddingRight = (event:any ) => {
    setRight(event.target.value)
    if(active.type === ''){
      setOpenErrorLabel(true);
      return;
    }else{
    setActiveComponent((state:any) => ({       
          ...state,    
          sx: {
            ...state.sx,
            paddingRight: event.target.value
          }      
    }));

  }
    updateActiveComponent(activeModify);
  }
  const handleChangePaddingTop = (event:any ) => {
    setTop(event.target.value)
    if(active.type === ''){
      setOpenErrorLabel(true);
      return;
    }else{
    setActiveComponent((state:any) => ({       
          ...state,    
          sx: {
            ...state.sx,
            paddingTop: event.target.value
          }      
    }));

  }
    updateActiveComponent(activeModify);
  }
  const handleChangePaddingBottom = (event:any ) => {
    setBottom(event.target.value)
    if(active.type === ''){
      setOpenErrorLabel(true);
      return;
    }else{
    setActiveComponent((state:any) => ({       
          ...state,    
          sx: {
            ...state.sx,
            paddingBottom: event.target.value
          }      
    }));

  }
    updateActiveComponent(activeModify);
  }
  function opened(){
   const button = document.getElementById('box');
   if (button != null) {
    button.style.display = "block"
    button.classList.add("animate__animated")
    button.classList.add("animate__fadeInLeft")
   }
  }

  function closed(){
    const button = document.getElementById('box');
    if (button != null) {
      button.style.display = "none"      
    }
   }

  return (
    <>
    <Button onClick={opened} variant="contained" endIcon={<AlignHorizontalLeftIcon />} sx={{minWidth:'20px',margin:'22px 30px',background:'purple'}}/>      
    
    <Box
      id='box'
      className={style.menu}
      // className="animate__animated animate__backInRight"
      sx={{
        width: 350,
        position: 'fixed',
        left: 0,
        top: 0,
        bgcolor: '#313131',
        zIndex: 9999,
        height: 700,
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <AppBar position="static" sx={{backgroundColor:'black'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          
        >
          {
           (active.type === 'text') ? (<Tab icon={<FormatColorTextIcon />} {...a11yProps(0)}  /> ): 
           (active.type === 'button') ?  (<Tab icon={<RadioButtonUncheckedIcon />} {...a11yProps(0)} />) : (active.type === 'list') ?
           (<Tab icon={<FilterListIcon />} {...a11yProps(0)} />) : (active.type === 'image') ? (<Tab icon={<ImageIcon />} {...a11yProps(0)} />) :
           (<Tab icon={<FormatColorTextIcon />} {...a11yProps(0)}  /> )
          } 
          <Tab icon={<ColorLensIcon />} {...a11yProps(1)} />

          <Tab icon={<TextFieldsIcon />} {...a11yProps(2)} />
          <div className={style.buttonShow}>
            <Tab onClick={closed} icon={<ArrowBackIosIcon />} {...a11yProps(3)} />
          </div>
          
          {/* <div className={style.buttonShow}>
            <Button className={style.buttonShow} endIcon={<ArrowBackIosIcon sx={{width:'30px',height:'30px'}}/>} onClick={closed} sx={{width:'50px',margin:'30px',float:'right'}}/>  
          </div> */}
        </Tabs>
        </AppBar>
      </Box>
     <TabPanel value={value} index={0}>
        <Typography sx={{color:'white'}}>Width:</Typography>
        <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            value={width}
            onChange={handleChangeWidth}
            max={100}
          />
        <Typography sx={{color:'white'}}>Heigth:</Typography>
        <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            value={heigth}
            onChange={handleChangeHeigth}
            max={400}
          />         
        <Typography sx={{color:'white'}}>Font Size:</Typography>
        <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            value={size}
            onChange={handleChangeSize}
          />
        <Typography sx={{color:'white'}}>Border Radius:</Typography>
        <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            value={radius}
            onChange={handleChangeRadius}
            max={100}
          />
          <Box sx={{padding:'50px'}}>
            <h1 style={{textAlign:'center',}}>Paddings</h1>
          <Typography sx={{color:'white'}}>Padding left:</Typography>
        <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            value={left}
            onChange={handleChangePaddingLeft}
            max={350}
          />
          <Typography sx={{color:'white'}}>Padding right:</Typography>
        <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            value={right}
            onChange={handleChangePaddingRight}
            max={350}
          />
          <Typography sx={{color:'white'}}>Padding top:</Typography>
        <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            value={top}
            onChange={handleChangePaddingTop}
            max={100}
          />
          <Typography sx={{color:'white'}}>Padding bottom:</Typography>
        <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            value={bottom}
            onChange={handleChangePaddingBottom}
            max={100}
          />
          </Box>
          <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
            <Box sx={{color:'white',backgroundColor:'#355192',borderRadius:'15px',width:'50px',textAlign:'center',cursor:'pointer'}} onClick={() => fileInputRef.current?.click()}  hidden={(active.type === 'image') ? false : true }><UploadFileIcon/></Box>
            <Box sx={{color:'white',backgroundColor:'#355192',borderRadius:'15px',width:'50px',textAlign:'center',cursor:'pointer'}} onClick={() =>   handleClickDelete(active.id)} hidden={(active.type === '') ? true : false }><DeleteForeverIcon/></Box>
          </Box>
          <input type="file" onChange={onFileInputChange}  ref={fileInputRef as React.LegacyRef<HTMLInputElement>} style={{display:'none'}}/>
          
      </TabPanel>
      <TabPanel value={value} index={1} >
      <Typography sx={{color:'white'}}>Box shadow :</Typography>
        <Box sx={{marginBottom:'50px'}}>
              <ShadowPicker
              value={shadow}
              onChange={(value) => {
                handleChangeBoxShadow(value);
              }}
            />
       </Box>
      <Typography sx={{color:'white'}}>Background color :</Typography>
        <CustomMenuLayout>
            <HexColorPicker className={style.reactColorful} color={color} onChange={handleChangeColor} />
        </CustomMenuLayout>
        <Typography sx={{color:'white'}}>Color text:</Typography>
        <CustomMenuLayout>
            <HexColorPicker className={style.reactColorful} color={colors} onChange={handleColor} />
        </CustomMenuLayout>
        <Typography sx={{color:'white'}}>Background:</Typography>
        <CustomMenuLayout>
            <HexColorPicker className={style.reactColorful} color={background} onChange={handleBackground} />
        </CustomMenuLayout>
        <Typography sx={{color:'white'}}>Background border:</Typography>
        <CustomMenuLayout>
            <HexColorPicker className={style.reactColorful} color={backgroundBorder} onChange={handleBackgroundBorder} />
        </CustomMenuLayout>

        
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Typography sx={{color:'white',margin:'20px 0px'}}>Change text :</Typography>
          <TextField
              id="filled-textarea"
              label="Change Label"
              placeholder="Label"
              multiline
              variant="filled"
              onChange={handleModifyLabel}
              value={label}
            />




<Typography sx={{color:'white',margin:'20px 0px'}}>Change font family:</Typography>
<Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="FontFamily" />}
      onChange={handleFontFamilyChange}
     
    />
    <Typography sx={{color:'white',margin:'20px 0px'}}>Select Item Change:</Typography>
<Autocomplete
      disablePortal
      id="combo-box-demo"
      options={optionsItems}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Select Item Change" />}
      onChange={handleItemChange}
    />
<Typography sx={{color:'white',margin:'20px 0px'}}>Change text item :</Typography>
          <TextField
              id="filled-textarea"
              label="Change Label"
              placeholder="Label"
              multiline
              variant="filled"
              onChange={handleModifyItemValue}
              value={labelItem}
            />
        <Typography sx={{color:'white',margin:'20px 0px'}}>Align items:</Typography>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned">
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <FormatAlignRightIcon />
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified">
              <FormatAlignJustifyIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        <Typography sx={{color:'white',margin:'20px 0px'}}>Delete point list:</Typography>
        <Checkbox
          checked={checked}
          onChange={handleChangeRadio}
          inputProps={{ 'aria-label': 'controlled' }}
        />
       <Typography sx={{color:'white',margin:'20px 0px'}}>Delete border:</Typography>
        <Checkbox
          checked={checkedBorder}
          onChange={handleChangeBorder}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </TabPanel> 
    </Box>
    <Snackbar open={labelOpen} autoHideDuration={4000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                  You have to select a component to modify it
                  </Alert>
     </Snackbar>
     <Snackbar open={itemChangeOpen} autoHideDuration={4000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                  You have to select an item to be able to change it
                  </Alert>
     </Snackbar>
     <Snackbar open={itemOpen} autoHideDuration={4000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                  The selected component must be of type list
                  </Alert>
     </Snackbar>
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                  You have to select a component to remove it
                  </Alert>
     </Snackbar>
    </>
  );
};


