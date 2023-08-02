import styled from "@emotion/styled";
import { Card, CardContent, Grid, Typography } from "@mui/material"

const Img = styled('img')({
   height: 268,
   width: '88%',
   objectFit: 'cover',
   borderRadius: 5
});

const Component = styled(Card)`
margin-bottom: 20px;
box-shadow: 0 2px 5px 0 rgb(0 0 0/16%), 0 2px 10px 0 rgb(0 0 0/12%);
`;

const Container = styled(CardContent)`
padding: 8px;
padding-bottom: 8px !important;
`;

const RightContainer = styled(Grid)`
   margin: 5px 0 0 -25px;
   display: flex;
   flex-direction: column;

   @media (min-width: 600px) and (max-width: 1280px) { // Apply padding between 'sm' and 'lg' screen sizes
      padding: 0 5px;
   }
   @media (max-width: 600px){
    margin: 5px 0;
 }
`;

const Text = styled(Typography)`
font-weight: 300;
font-size: 22px;
color: #44444d;
line-height: 27px;
`;

const Discription = styled(Typography)`
    line-height: 22px;
    color: #44444d;
    margin-top:5px;
    font-weight: 300;`

const Author = styled(Typography)`
    color: #808290;
    font-size: 12px;
    line-height: 22px;
`;

const Publisher = styled(Typography)`
    font-size: 12px;
    margin-top: auto;
    margin-bottom: 10px`
    

const Article = ({data}) =>{
    return(
        <Component> 
            <Container>
                <Grid container>
                    <Grid lg={5} sm={5} xs={12}item>
                        <Img src={data.url} alt="newsimg" />
                    </Grid>
                    <RightContainer lg={7} sm={7} xs={12} item> 
                        <Text>{data.title}</Text>
                        <Author><b>short</b> by {data.author}/ {new Date(data.timestamp).toDateString()}</Author>
                        <Discription>{data.description}</Discription>
                        <Publisher>Read more at <a style={{textDecoration: 'none', color: '#000'}}href={data.link} target="_blank" rel="noreferrer"><b>{data.publisher}</b></a></Publisher>
                    </RightContainer>
                </Grid>
            </Container>
        </Component>
    )
}

export default Article;