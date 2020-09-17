import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FaCartPlus } from "react-icons/fa";
import Badge from '@material-ui/core/Badge';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { Image, Transformation } from 'cloudinary-react';

import { ficticiousProduct } from '../pages/Market';


const useStyles = makeStyles((theme) => ({
	avatar: {
		backgroundColor: '#4caf50',
	},
	fontSize: {
		fontSize: '1.5rem'
	},
	fixedHeight: {
		height: '12rem',
		marginBottom: '1.5rem',
	},
	smallFontSize: {
		fonstSize: '1.2rem'
	},
	card: {
		fontSize: '1.5rem',
		display: 'flex',
		width: '100%',
		height: '29rem'
	}
}));

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
		fontSize: '1.1rem',
		background: '#4caf50'
	},
}))(Badge);

const ItemListStyle = () => {
	const classes = useStyles();
	const [mainImg1, setMain1Img] = React.useState('staticAssets/carrots_k7k2ku');
	const [mainImg2, setMain2Img] = React.useState('staticAssets/beans_jgdn6y');
	const [mainImg3, setMain3Img] = React.useState('staticAssets/peas_vkpymp');

	const handleChangeMainImg = (img, imgName) => {
		switch(img) {
			case 'mainImg1':
				setMain1Img(imgName)
				break;
			case 'mainImg2':
				setMain2Img(imgName)
				break;
			case 'mainImg3':
				setMain3Img(imgName)
		}

	}

	return (
		<div className="product-list-style">
			{
				ficticiousProduct.map(product => (
					<div className="product-list-item list-style-item" key={product.id}>
						<NavLink to={`/product/${product.id}/description`} className="product-nav-link">
							<Card className={classes.card}>
								<div className="product-item">
									<div className="product-img">
										<div className="main-img">
											<Image
												className="product-img-item"
												publicId='staticAssets/beans_jgdn6y'
											>
												<Transformation quality="auto" fetchFormat="auto" />
											</Image>
										</div>
										<div className="sub-img">
											<Image
												className="sub-product-img-item"
												onClick={(e) => handleChangeMainImg('mainImg1', 'staticAssets/carrots_k7k2ku')}
												publicId='staticAssets/carrots_k7k2ku'
											>
												<Transformation quality="auto" fetchFormat="auto" />
											</Image>
											<Image
												className="sub-product-img-item"
												onClick={(e) => handleChangeMainImg('mainImg1', 'staticAssets/tomatoes_arzns2')}
												publicId='staticAssets/tomatoes_arzns2'
											>
												<Transformation quality="auto" fetchFormat="auto" />
											</Image>
											<Image
												className="sub-product-img-item"
												onClick={(e) => handleChangeMainImg('mainImg1', 'staticAssets/peas_vkpymp')}
												publicId='staticAssets/peas_vkpymp'
											>
												<Transformation quality="auto" fetchFormat="auto" />
											</Image>
											<Image
												className="sub-product-img-item"
												onClick={(e) => handleChangeMainImg('mainImg1', 'staticAssets/mangoes_ksuvfs')}
												publicId='staticAssets/mangoes_ksuvfs'
											>
												<Transformation quality="auto" fetchFormat="auto" />
											</Image>
										</div>
									</div>
									<div className="product-item-content">
										<CardHeader
											className={classes.smallFontSize}
											avatar={
												<Avatar aria-label="recipe" className={classes.avatar}>
												{product.avatar}
												</Avatar>
											}
											action={
												<IconButton aria-label="settings">
													<MoreVertIcon />
												</IconButton>
											}
											title={product.seller}
											subheader={product.date}
										/>
										<CardContent className={classes.fixedHeight}>
											<div
												style={{
													overflow: "hidden",
													textOverflow: "ellipsis",
													height: "100%"
												}}
											>
												<Typography variant="h5" gutterBottom>
													{product.title}
												</Typography>
												<Typography className={classes.fontSize} variant="body2" color="textSecondary" component="p">
													{product.description}
												</Typography>
											</div>
										</CardContent>
										<CardActions disableSpacing>
											<div className="action-section">
												<div className="chat-share">
													<IconButton aria-label="share">
														<ShareIcon
															style={{
																fontSize: '2rem'
															}}
														/>
													</IconButton>
													<IconButton>
														<StyledBadge badgeContent={4} color="secondary">
															<ChatBubbleIcon
																style={{
																	fontSize: '2rem'
																}}
															/>
														</StyledBadge>
													</IconButton>
												</div>
												<IconButton aria-label="cart">
													<FaCartPlus
														style={{
															fontSize: '2rem'
														}}
													/>
												</IconButton>
											</div>
										</CardActions>
									</div>
								</div>
							</Card>
						</NavLink>
					</div>
				))
			}
		</div>
	);
}

export default ItemListStyle;