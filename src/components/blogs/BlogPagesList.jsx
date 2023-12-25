import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Grid,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const BlogPagesList = ({ cmsPages, onDelete, onUpdate }) => {
  // Ensure cmsPages is always an array
  const safeCmsPages = cmsPages || [];

  return (
    <Card>
      <CardHeader title="CMS Pages" />
      <CardContent>
        <List>
          {safeCmsPages.map((page) => (
            <ListItem key={page.id} divider>
              <ListItemText
                primary={page.title}
                secondary={
                  <React.Fragment>
                    <Typography component="span" variant="body2" color="textPrimary">
                      {new Date(page.createdAt).toLocaleDateString()}
                    </Typography>
                    {" — " + page.description.replace(/<\/?[^>]+(>|$)/g, "")}
                  </React.Fragment>
                }
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={() => onUpdate(page.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => onDelete(page.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default BlogPagesList;
