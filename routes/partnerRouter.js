const express = require('express');
const partnerRouter = express.Router();

partnerRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end('Will send all the partners to you');
  })
  .post((req, res) => {
    res.end(
      `Will add the campsite partners: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
  })
  .delete((req, res) => {
    res.end('Deleting all partners');
  });

partnerRouter
  .route('/:partner')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end(`Will send details of the partner: ${req.params.partner} to you`);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /partners/${req.params.partner}`);
  })
  .put((req, res) => {
    res.write(`Updating the campsite partner: ${req.params.partner}\n`);
    res.end(
      `Will update the campsite partner: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .delete((req, res) => {
    res.end(`Deleting partner: ${req.params.partner}`);
  });

module.exports = partnerRouter;
