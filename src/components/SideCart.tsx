import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

let drawerWidth

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export default function SideCart() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    if (!open) {
        drawerWidth = '0';
    } else {
        drawerWidth = '{xs: 100% , sm: 30%}';
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                zIndex: 2
            }}>
            {/* navbar knappen */}
            <Toolbar>
                <IconButton
                    size="large"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="end"
                    sx={{ ...(open && { display: 'none' }) }}
                >
                    <ShoppingBagIcon
                        sx={{
                            zIndex: 1,
                            fontSize: '3rem',
                        }}
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            height: '100%',
                            zIndex: 1,
                            display: { xs: 'none', sm: 'inline-block' }
                        }}>
                        View your selections
                    </Typography>
                </IconButton>
            </Toolbar>
            {/* navbar knappen */}

            <Drawer
                sx={{
                    zIndex: 2,
                    position: 'absolute',
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: {xs: '100%' , sm: '40%', md: '30%', lg: '20%'}
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {/* pris ellr prudkter */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales vehicula lacus, malesuada viverra quam. Ut suscipit, libero in suscipit rutrum, lectus nisl venenatis tellus, pellentesque ornare purus mauris at metus. Ut facilisis venenatis orci, ut fringilla ligula lobortis ac. Sed vestibulum sapien in nisl finibus cursus. Phasellus fringilla suscipit mi, et malesuada ipsum. Pellentesque nec sodales nisl. Duis nec est sit amet enim tempus sagittis. In eget neque in sapien tristique feugiat quis eget diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat molestie sagittis. Nam congue nisl nisi, vel congue augue congue non. Nullam in purus varius, vestibulum dolor et, commodo nulla. Etiam ullamcorper ultricies mollis. Fusce et nibh posuere, facilisis justo ut, ultricies sem.

                        Aliquam facilisis quis nisl quis maximus. Duis semper ante nibh, ut lacinia ligula ornare vel. Nam sed neque posuere, rhoncus dolor sed, molestie velit. Integer lobortis nisi vel felis maximus, vitae efficitur turpis gravida. Vivamus suscipit cursus risus, id mattis leo fringilla et. Curabitur egestas rhoncus sapien, sit amet rhoncus purus vehicula non. Donec feugiat volutpat libero sed facilisis. Suspendisse est turpis, condimentum ut sem non, tempus porttitor sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus a suscipit lorem, in accumsan lorem. Integer tincidunt suscipit consectetur. Aliquam volutpat pharetra odio in consequat. Ut diam libero, vehicula et maximus id, ultricies iaculis orci. Fusce accumsan, augue eu facilisis consequat, augue metus vulputate elit, sed vehicula libero purus tincidunt turpis. Integer auctor ex ac justo hendrerit ultricies.

                        Proin porttitor justo a auctor condimentum. Donec in diam et odio porttitor tempor nec quis lectus. Fusce dictum nunc arcu, sit amet vehicula enim convallis vel. Morbi tellus massa, finibus et imperdiet vestibulum, vulputate vel turpis. Aliquam bibendum scelerisque viverra. Proin vitae leo ut libero aliquam sodales non in orci. Aenean tincidunt elit eu lorem tempor, ac porttitor lectus cursus. Donec et quam ut purus mattis aliquet sed vel tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vestibulum ullamcorper ligula, lacinia mollis arcu pellentesque vel. Nam neque est, volutpat nec tortor sollicitudin, imperdiet aliquam augue. Nullam ac rhoncus nulla, sit amet sodales elit. Quisque laoreet sagittis tellus non varius. Cras blandit cursus nibh nec dignissim.
                </List>
                <Divider />
                <List>
                    <Typography>

                        Nunc non leo vel lacus blandit commodo semper ac sapien. Maecenas hendrerit dolor in justo aliquet, at venenatis lacus vulputate. Aliquam venenatis nunc id aliquam venenatis. Vestibulum facilisis massa lacinia velit commodo, a rhoncus dui tristique. Sed fermentum id lacus non elementum. Nulla eget faucibus quam. Cras at hendrerit lorem. Fusce tincidunt congue vehicula. Nullam dictum urna et placerat facilisis. Integer sodales vitae risus vel laoreet. Aliquam quam tellus, pellentesque non tortor nec, varius sollicitudin elit.

                        Nunc sollicitudin, mi eget dignissim condimentum, ex magna pharetra lectus, et maximus nulla lorem ac sapien. Duis quis urna tellus. Maecenas in elit eget ipsum imperdiet placerat. Praesent ac nibh eu velit facilisis mattis quis sed urna. Praesent nec tortor ex. Morbi eu lectus nibh. Donec consectetur enim in risus tincidunt convallis. Sed magna lectus, facilisis eget sollicitudin vel, hendrerit eleifend metus. Etiam vehicula laoreet tristique. Phasellus quam augue, condimentum a enim vitae, sollicitudin suscipit urna. Mauris hendrerit eros hendrerit dolor rhoncus, non imperdiet nulla faucibus. Vestibulum tristique eros tortor, eu pharetra dolor tempus sed. Nam at diam euismod nibh tempus bibendum.
                    </Typography>
                </List>
            </Drawer>
        </Box>
    );
}